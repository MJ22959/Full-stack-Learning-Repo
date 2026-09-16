

const Card = ({name, age, gender}) => {
  return (
    <div className="w-[300px] h-[200px] bg-white shadow-md border border-gray-200 p-3 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <img src="panda.jpg" alt="A calm panda resting in a quiet natural setting surrounded by greenery" className="w-300px h-300px p-5" />
      </div>
        <div>
          <h1 className="text-lg font-semibold" style={{ textAlign: 'center' }}>Name: {name}</h1>
          <p className="text-gray-500" style={{ textAlign: 'center' }}>Age: {age}, Gender: {gender}</p>
        </div>
        <p className="text-gray-700" style={{ textAlign: 'justify' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
  )
}

export default Card