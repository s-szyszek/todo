# TODO

Aplikacja lista zadań, przypomnienia, etc.

Składa się z dwóch funkcjonalności:

1. lista dodanych zadań,
2. formularz dodawania nowych zadań.

W aplikacji dodano prosty server API (json-server) a w raz z nim 2 endpointy:

 - `/categories` -- lista kategorii
 - `/tasks` -- lista zadań

Przykładowe dane znajdują się w pliku `data.json`

## Jak uruchomić?

Do uruchomienia aplikacji potrzebujesz oczywiście node.js i jakiś manager pakietów (my korzystamy z yarn-a)

```
yarn install
yarn run start
```

W drugim oknie/terminalu uruchamiamy serwer.
```
yarn run jsonserver
```

# Polecenie

1. Dodaj funkcjonalność dodawania nowych zadań rozszerzając odpowiednio komponent Form.
   Nie zapomnij o sprawdzeniu, czy pola *kategoria*, *tytuł* zostały wypełnione.
2. Spraw, aby lista zadań uzupełniała się na podstawie danych z serwera.
3. Dodaj funkcjonalność usuwania zadania.

Ocenie podlega czystość kodu, znajomość wykorzystanych funkcji, praktyczna umiejętność posługiwania się API, optymalizacja.
Nie będzie oceniany wygląd/design aplikacji, jednak zwróć szczególną uwagę na dostępność Twojego rozwiązania.

Do komunikacji z serwerem możesz wykorzystać np. bibliotekę axios.
