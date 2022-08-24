import React, { useState } from 'react'
import Menu from './Menu/Menu'
import 'materialize-css'
import './App.css'

const App = () => {
  const [menuActive, setMenuActive] = useState(false)
  const items = [
    { value: 'Главная', href: '/main', icon: 'ac_unit' },
    { value: 'Услуги', href: '/service', icon: 'accessible' },
    { value: 'Магазин', href: '/shop', icon: 'add' },
  ]
  return (
    <div className="App">
      <nav className="nav">
        <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
          <span />
        </div>
      </nav>
      <main className="main">
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil rem
          cupiditate nemo explicabo doloremque quia illum? Aliquid nam et
          assumenda? Impedit ut repellat in? Ipsa odit omnis id alias hic minus
          a amet fugit corporis repellat? Quas commodi fugit at tempore, quo,
          incidunt eius praesentium quibusdam voluptatem temporibus eveniet non
          unde.
        </p>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil rem
          cupiditate nemo explicabo doloremque quia illum? Aliquid nam et
          assumenda? Impedit ut repellat in? Ipsa odit omnis id alias hic minus
          a amet fugit corporis repellat? Quas commodi fugit at tempore, quo,
          incidunt eius praesentium quibusdam voluptatem temporibus eveniet non
          unde.
        </p>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil rem
          cupiditate nemo explicabo doloremque quia illum? Aliquid nam et
          assumenda? Impedit ut repellat in? Ipsa odit omnis id alias hic minus
          a amet fugit corporis repellat? Quas commodi fugit at tempore, quo,
          incidunt eius praesentium quibusdam voluptatem temporibus eveniet non
          unde.
        </p>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil rem
          cupiditate nemo explicabo doloremque quia illum? Aliquid nam et
          assumenda? Impedit ut repellat in? Ipsa odit omnis id alias hic minus
          a amet fugit corporis repellat? Quas commodi fugit at tempore, quo,
          incidunt eius praesentium quibusdam voluptatem temporibus eveniet non
          unde.
        </p>
      </main>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={'Бургер меню'}
        items={items}
      />
    </div>
  )
}

export default App
