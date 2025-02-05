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

### Как использовыала в проекте

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

### Project build template: React + Vite, React-router-dom
