import Header from './components/Header/Header'
import './App.css'

const menuItems = [
  { title: 'Акции', link: '/actions' },
  { title: 'Каталог', link: '/catalog' },
  { title: 'Доставка', link: '/delivery' },
  { title: 'О магазине', link: '/about' },
  { title: 'Блог', link: '/blog' },
]

function App() {
  return (
    <div className="App">
      <Header menuItems={menuItems} />
    </div>
  )
}

export default App
