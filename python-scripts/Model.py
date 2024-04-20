import json

# Function to calculate cashback
def calculate_cashback(transactions):
    cashback = [min((transaction ** 2) / 2, 10) for transaction in transactions]
    return cashback

# Read data from JSON file
def read_json(filename):
    categories = {
        'food': 0,
        'shopping': 0,
        'healthcare': 0,
        'entertainment': 0
    }

    with open(filename, 'r') as file:
        data = json.load(file)
        for purchase in data['Purchases']['Purchase']:
            category = purchase['category']
            if category in categories:
                categories[category] += 1

    return categories

# Calculate cashback for each category
def calculate_cashback_for_categories(filename):
    categories = read_json(filename)
    transactions = list(categories.values())
    cashback = calculate_cashback(transactions)
    return categories, cashback

# Print results
def print_results(categories, cashback):
    print('Category\tTransactions\tCashback')
    print('----------------------------------')
    for category, transactions, cb in zip(categories.keys(), categories.values(), cashback):
        print(f'{category}\t\t{transactions}\t\t{cb}%')

# Main function
def main():
    filename = 'purchase.json'  # Adjust the filename accordingly
    categories, cashback = calculate_cashback_for_categories(filename)
    print_results(categories, cashback)

if __name__ == "__main__":
    main()