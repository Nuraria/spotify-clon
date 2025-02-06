# A description of everything new to me in this project

### Hooks - react-router-dom

- useNavigate
- useLocation
- useParams

### Hooks - react

- useRef
- useContext

## Description about react-router-dom hooks

**useNavigate()** - возращает функцию для навигации по разным маршрутам внутри преложения без прямого рендеринга компонента `<Link>`
Основные моменты к реализации:

1. Управлять навигацией в стеке истории. Перемещение вперёд, назад в стеке.
2. Динамическая навигация без зависимости от компонента `<Link>`
3. Обрабатывание действий пользователя на сайте. Перенаправление в зависимости от таких действий как подача формы или входа в систему **_(изменение состояния)_**
4. Программное перенаправление на разные маршруты в зависимости от выполнения условия или состояния хранящегося в state

### Как useNavigate использовался в проекте

Здесь я использовала хук useNavigate для того что-бы реализовать перенаправление пользователя в альбом по уникальному _id_

> _onClick_ - событие с помощью которого по нажатию на обозначенный элемент нас будет перекидывать на указанный `navigate(`/album/${id}`)` маршрут внутри функции _navigate_

```rb

 const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="image" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
```

Панель навигации которая позволяет нам перемещаться на +1 и -1 в стеке истории по кнопкам

```rb

 const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="arrow_left"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="arrow_left"
          />
        </div>
```

Переход по главному пути указанному в _аргументе_ функции navigate

```rb
const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden  lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="font-bold">Главная</p>
        </div>
```

## Description

**useLocation()** - возвращает объект _location_, содержащий текущий **URL**. Его можно рассматривать как state хранящий текущее положение пользователя на странице с помощью которого можно вернуть новое местоположение(URL) если оно внезапно измениться.
Основные моменты к реализации:

- Всегда знаем свой текущий URL !)

### Как useLocation использовался в проекте

Получаем объект _location_ у которого получаем путь в **URL** с помощью _pathname_ , метод include проверяет в строке наличие подстроки `includes("album")` и проверяя по условию если подстрока если есть(true) тогда оно получает часть пути URL после первой косой черты где содержится необходимый нам _id_ иначе пустая строка.

> С помощью полученнного id позже мы вытаскиваем необходимый backroud для нашей странички в зависимости от песни на которую мы перешли.

```rb
const Dispaly = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {

      displayRef.current.style.background = `linear-gradient(${bgColor},#121212`;
    } else {

      displayRef.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};
```

## Descrition

**useParams** - возвращает обЪект с параметрами _URL_ в формате _key:value_ обеспечивая к ним доступ.

> Когда использовать: Когда нужны значения, переданные в статической части URL, определенной в маршруте. Например, если маршрут /products/:id, то useParams() предоставит вам доступ к значению id.

По полученному _id_ мы можем вытащить данные о изображении, названии и прочие данные к каждому конкретному обЪекту.

```rb
  const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];

  <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img className="rounded w-48" src={albumData.image} alt="image" />
        <div className="flex flex-col">
          <p>Плэйлист</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="logo"
            />

```

## Description about react hooks

**useRef** - позволяет сохранить ссылки на **DOM**-элемнты или любые лругие значения которые нужно сохранить между рендерами. Но самое главное что изменение хранимого значения не вызывает ререндера всего компонента. Когда мы вызываем useRef создаётся обЪект с свойствои current которое мы используем для хранения значения и его вызыва к просмотру.

```rb

const Dispaly = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      // displayRef.current.style.backround = `liner-gradient(${bgColor},#121212)`;
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212`;
    } else {
      // displayRef.current.style.background = `#121212)`;
      displayRef.current.style.background = `#121212`;
    }
  });
  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

```

### Project build template: React + Vite, tailwindCSS, React-router-dom
