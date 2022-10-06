# Essential Stuff

## Html import links

Google font

``` html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
href="https://fonts.googleapis.com/css2?family=Merienda&family=Oswald:wght@300;400;500&family=Roboto:wght@400;500;700&display=swap"
rel="stylesheet">
```

Ionicon

``` html
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```

---

## Colors

``` css
--rich-black-fogra-29_a85: hsla(207, 24%, 7%, 0.85);
--rich-black-fogra-29_a75: hsla(207, 24%, 7%, 0.75);
--rich-black-fogra-29: hsl(207, 24%, 7%);
--rich-black-fogra-39: hsl(210, 25%, 5%);
--dark-orange: hsl(32, 100%, 50%);
--light-gray: hsl(206, 8%, 82%);
--white_a10: hsla(0, 0%, 100%, 0.1);
--white_a60: hsla(0, 0%, 100%, 0.6);
--camel: hsl(27, 34%, 58%);
--white: hsl(0, 0%, 100%);
```

## Gradient color

``` css
--gradient: linear-gradient(
    to top,
    hsla(210, 25%, 5%, 0.95) 0,
    hsla(210, 24%, 7%, 0.45) 70%,
    hsla(207, 24%, 7%, 0) 100%
  );
```

## Typography

``` css
--ff-oswald: 'Oswald', sans-serif;
--ff-roboto: 'Roboto', sans-serif;
--ff-merienda: 'Merienda', cursive;

--fs-1: 5rem;
--fs-2: 3.2rem;
--fs-3: 2.4rem;
--fs-4: 2.2rem;
--fs-5: 1.4rem;
--fs-6: 1.3rem;

--fw-400: 400;
--fw-500: 500;
--fw-600: 600;
```

## Spacing

``` css
--section-padding: 70px;
```

## Border Radius

``` css
--radius-circle: 50%;
--radius-5: 5px;
```

## Transition

``` css
--transition-1: 0.25s ease;
--transition-2: 0.5s ease;
--transition-3: 0.75s ease;
--cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
--cubic-out: cubic-bezier(0.33, 0.85, 0.4, 0.96);
```
