const ProductCard = ({ name, price, category, instock, image }) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-shadow hover:shadow-lg">
      <img
        src={image}
        alt={`${name} served on a plate`}
        className="h-52 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-xl font-bold leading-tight text-gray-900">{name}</h1>
          <p className="shrink-0 text-lg font-semibold text-gray-900">${price.toFixed(2)}</p>
        </div>
        <p className="text-sm text-gray-500">Category: {category}</p>
        <p className={`text-sm font-medium ${instock ? 'text-green-600' : 'text-red-600'}`}>
          {instock ? 'In Stock' : 'Out of Stock'}
        </p>
      </div>
    </div>
  )
}

export default ProductCard