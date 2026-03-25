---
title: 'Guia para dar solucion al error "Functions are not valid as a React child"'
tags: ["React", "React-Router", "Errores-Comunes", "Debugging"]
date: "2024-06-15"
---

# Error: Functions are not valid as a React child

Al momento de renderizar un componente en React, me apareció este error:

<div class='img-container'>
  <img  src='/images/blog/post-1/error-react-function-child.webp' />
</div>

En español: Advertencia: Las funciones no son válidas como elementos hijos de React. Esto puede ocurrir si retornas un componente en lugar de `<Componente />` desde el render. O tal vez querías llamar a esta función en lugar de retornarla.

## El error

Me dirigí al archivo _AuthContext.jsx_ y todo parecía estar en orden:

```js
import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../index.ts";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        async (event, session) => {
          console.log("Auth state changed: ", event, session);
          if (session?.user == null) {
            setUser(null);
          } else {
            setUser(session?.user);
          }
        };
      }
    );

    return () => {
      authListener.subscription;
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
```

Así que entonces me dirigí al lugar donde estaba utilizando el _AuthContextProvider_:

```js
import { AuthContextProvider, MyRoutes } from "./index.ts";

function App() {
  return (
    <>
      <AuthContextProvider>
        <MyRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
```

Como el _AuthContextProvider_ estaba envolviendo al componente _MyRoutes_, deduje que este último debía ser el componente que estaba retornando una función en lugar de un _child_ válido para React.

Dentro de _routes_:

```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "../index.ts";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Home} />
      </Routes>
    </BrowserRouter>
  );
}
```

En ese momento continué revisando dentro del componente `Home` y, como no encontré el error, seguí buscando dentro de los componentes que allí se encontraban. Sin embargo, más tarde descubrí que el error estaba justo en este archivo.

## La solución

Si te fijas, al momento de declarar el componente de la ruta raíz "/":

```js
<Route path="/" element={Home} />
```

Estoy pasando incorrectamente el componente `Home`. La forma correcta es esta:

```js
<Route path="/" element={<Home />} />
```
