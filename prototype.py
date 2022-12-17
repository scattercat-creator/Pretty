print("Bot: hello")
response = input("You: ")
print("What style are you interested in?")
response = input("You: ")
if response == "streetwear":
    print("You can shop at Tilly's or BoohooMan")
elif response == "soft":
    print("you can shop at Uniqlo, Pacsun, or H&M")
    print("would you like to add another shop?")
elif response == "classic":
    print("you can shop at Uniqlo")
