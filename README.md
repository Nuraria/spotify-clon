# A description of everything new to me in this project

### Hooks - react-router-dom

- useNavigate
- useLocation
- useParams

### Hooks - react

- useContext
- useRef

## Description

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

**useLocation()** - 



### Project build template: React + Vite, tailwindCSS, React-router-dom
