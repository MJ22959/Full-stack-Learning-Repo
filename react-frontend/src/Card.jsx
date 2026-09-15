

const Card = () => {
  return (
    <div className="w-[300px] h-[200px] bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <img src="D:\New folder\Full stack webdevelopment MERN\react-frontend\public\favicon.svg" alt="Young man in a dark shirt, facing the camera with a friendly smile in a simple studio setting with soft lighting and a neutral background. The text Welcome boy appears across the design. The overall mood is warm and approachable." className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-gray-500">Software Engineer</p>
        </div>
      </div>
      <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  )
}

export default Card