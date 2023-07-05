/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import Menu from './components/Menu'
import NewsGrid from './components/NewsGrid'

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] = useState("general")

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9b82f916379e4944bcde0c81133bf4fe`)
    .then(res => res.json())
    .then(data => setItems(data.articles))
  }, [category])

  return (
    <div className="App">
      <h1 className="title">News 24/7</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory}/>
      <NewsGrid items={items}/>
    </div>
  )
}

export default App