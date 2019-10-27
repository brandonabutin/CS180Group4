from django.db import models
from coinmarketcap import Market
from collections import OrderedDict
from operator import itemgetter


class Home(models.Model):
    name = models.CharField(max_length=100, default='')
    currencyName = models.CharField(max_length=100, default='')
    currencyPrice = models.CharField(max_length=50, default='')

    #helper function
    def fetch_cryptocurrecies_call():
        coinmarketcap_variable = Market()
        return coinmarketcap_variable.listings()

    #helper function
    def fetch_cryptocurrecies_call_sorted(fiatCurrency,sortingkey ='rank'):
        coinmarketcap_variable = Market()
        return coinmarketcap_variable.ticker(start = 0, limit = 100,convert = fiatCurrency,sort = sortingkey)

    #create a list of cryptocurrencies with just names
    def fetch_all_crypto_currencies_by_names(fiatCurrency):
        sortedCryptocurrencyList = fetch_cryptocurrecies_call_sorted(fiatCurrency)
        CryptocurrencyNameList = []
        for x in sortedCryptocurrencyList['data']:
            CryptocurrencyNameList.append(sortedCryptocurrencyList['data'][x]['name'])
        return CryptocurrencyNameList

    #returns a dictionary with sorted prices
    def fetch_all_crypto_currencies_by_price(fiatCurrency):
        name = ''
        price = 0
        cryptocurrencyDictionary = {}
        sortedCryptocurrencyList = fetch_cryptocurrecies_call_sorted(fiatCurrency)
        for x in sortedCryptocurrencyList['data']:
            name = sortedCryptocurrencyList['data'][x]['name']
            price= sortedCryptocurrencyList['data'][x]['quotes'][fiatCurrency]['price']
            cryptocurrencyDictionary[name] = price
        cryptocurrencyDictionarySorted = OrderedDict(sorted(cryptocurrencyDictionary.items(), key=itemgetter(1)))
        return cryptocurrencyDictionarySorted

    #create a function that fetches all the data and assigns it to a dictionary and sorted by ascending percentage changes
    def fetch_all_crypto_currencies_by_percentage_change_24h(fiatCurrency):
        name = ''
        percentage_change = 0.0
        cryptocurrencyDictionary = {}
        sortedCryptocurrencyList = fetch_cryptocurrecies_call_sorted(fiatCurrency)
        for x in sortedCryptocurrencyList['data']:
            name = sortedCryptocurrencyList['data'][x]['name']
            price= sortedCryptocurrencyList['data'][x]['quotes'][fiatCurrency]['percent_change_24h']
            cryptocurrencyDictionary[name] = price
        cryptocurrencyDictionarySorted = OrderedDict(sorted(cryptocurrencyDictionary.items(), key=itemgetter(1)))
        return cryptocurrencyDictionarySorted

    #create a function that searches for all valid cryptocurrencies and ALL of it's data of a certain cryptocurrency
    def fetch_all_crypto_currencies_data(fiatCurrency):
        name = ''
        percentage_change = 0.0
        market_cap = 0.0
        percent_change_1h = 0.0
        percent_change_24h = 0.0
        percent_change_7d = 0.0
        cryptocurrencyDictionaryEntryList = []
        sortedCryptocurrencyList = fetch_cryptocurrecies_call_sorted(fiatCurrency)
        for x in sortedCryptocurrencyList['data']:
            name = sortedCryptocurrencyList['data'][x]['name']
            price= sortedCryptocurrencyList['data'][x]['quotes'][fiatCurrency]['price']
            percent_change_1h = sortedCryptocurrencyList['data'][x]['quotes'][fiatCurrency]['percent_change_1h']
            percent_change_24h = sortedCryptocurrencyList['data'][x]['quotes'][fiatCurrency]['percent_change_24h']
            percent_change_7d =  sortedCryptocurrencyList['data'][x]['quotes'][fiatCurrency]['percent_change_7d']
            cryptocurrencyDictionaryEntry = {
                'name':name,
                'price':price,
                'percent_change_1h':percent_change_1h,
                'percent_change_24h':percent_change_24h,
                'percent_change_7d':percent_change_7d
            }
            cryptocurrencyDictionaryEntryList.append(cryptocurrencyDictionaryEntry)
        return cryptocurrencyDictionaryEntryList

    #search function for getting data about a SINGLE cryptocurrency
    def getDataSingleCryptoCurrency(cryptocurrencyname,fiatCurrency):
        cryptoDictionary = fetch_all_crypto_currencies_data(fiatCurrency)
        for x in cryptoDictionary:
            if x['name'] == cryptocurrencyname:
                return x
        return 'Cryptocurrency Not Found'

    def publish(self):
        currencyDict = getDataSingleCryptoCurrency('Bitcoin','USD')
        if currencyDict:
            self.currencyName = list(currencyDict)[0]
            self.currencyPrice = currencyDict[self.currencyName]
            self.save()
