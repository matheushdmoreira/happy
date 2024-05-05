<p align="center">
  <img src="https://docs.google.com/uc?id=1Br_Pt_yS5DyEUDVuodCjQjC9pO-_QWWg" width="100%" />
</p>

# Happy - App

Esta aplicação que tem o nome de Happy consiste em uma aplicação para cadastros e divulgação de casas de acolhimento. 🚀

## Executando o projeto

Abaixo seguem as instruções para você executar o projeto em sua máquina.

Comece clonando o repositório:

```sh
git clone https://github.com/matheushdmoreira/happy
```

### Back-end

O back-end desse projeto é construído em Node.js, mais especificamente sua versão LTS.

> Você pode instalar o Node.js seguindo [esse guia](https://efficient-sloth-d85.notion.site/Instalando-o-Node-js-d40fdabe8f0a491eb33b85da93d90a2f).

Após instalar o Node.js, vamos acessar a pasta api do projeto, instalar as dependências e, então, subir o servidor HTTP.

```sh
cd server

# Instalando as dependências
npm install

# Subir o servidor HTTP
npm run dev
```

### Front-end

O front-end desse projeto é construído com Vite.

Acessar a pasta web do projeto, instalar as dependências e, então, subir o servidor.

```sh
cd web

# Instalando as dependências
npm install

# Subir o servidor
npm run dev
```

### Mobile

Para executar o app pass.in utilizamos o Expo, uma ferramenta incrível da comunidade React Native. Além do Expo, é necessário que você utilize algum emulador local ou um dispositivo físico pra visualizar a aplicação.

> Você pode instalar o Expo e os emuladores seguindo [esse guia](https://react-native.rocketseat.dev/).

Instalando suas dependências:

```sh
cd mobile

# Instalando as dependências
npm install
```

Após configurar o ambiente mobile, você pode abrir o emulador e executar o projeto de acordo com a plataforma que estiver utilizando:

```sh
npx expo start
```

## Links rápidos ↗

- [Layout Mobile | Figma 🎨](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile?type=design&node-id=2-3&mode=design&t=Jo9Iyu9MoEYzCBBl-0)
- [Layout Web | Figma 🎨](https://www.figma.com/file/NXaJQnsyCZP46eNSOBqJZs/Happy-Web?type=design&node-id=2-3&mode=design&t=NBwhEM40SVGUTN9n-0)

**💻 Web:**

- [Vite](https://vitejs.dev/guide/)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React Router](https://reactrouter.com/en/main/start/tutorial)
- [Leaflet](https://leafletjs.com/reference.html)
- [React Leaflet](https://react-leaflet.js.org/)

**📱 Mobile:**

- [Expo](https://github.com/expo/expo)
- [TypeScript](https://github.com/microsoft/TypeScript)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React Native Maps](https://docs.expo.dev/versions/latest/sdk/map-view/)

## License

MIT License © [Matheus Moreira](https://github.com/matheushdmoreira)

