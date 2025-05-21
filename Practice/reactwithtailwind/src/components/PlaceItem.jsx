export const PlaceItem = () => {
  return (
    <div className="border-red-500 border-4 border-dashed  w-[50rem] h-[40rem] flex flex-col items-center justify-evenly mt-10 overflow-hidden">
      <h1 className="text-3xl font-bold bg-black text-white p-5 antialiased">
        Font Smoothness Testing
      </h1>

      <div>
        {[...Array(5)].map((_, i) => (
          <div className="w-[100px] h-[50px] bg-green-500 text-white font-bold rounded m-5">
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
