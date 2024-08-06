const App = () => {
  const friends = [
    { name: 'Leevi', age: 4, phone : 'lol' },
    { name: 'Venla', age: 10, phone: '555-123456' },
  ]

  return (
    <div>
      <p>{friends[0].name} {friends[0].age} {friends[0].phone}</p>
      <p>{friends[1].name} {friends[1].age} {friends[1].phone}</p>
    </div>
  )
}

export default App