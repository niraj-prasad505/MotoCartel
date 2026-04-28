
const UserReview = () => {
  return <div>
    <div className="gap-4 flex flex-col">
      <div className=" flex justify-between items-center">
        <h1 className="text-lg font-medium">Akshit shingh</h1>
        <h1 className=" text-xs">13 ovtober 1026</h1>
      </div>
      <div>
        <h1>⭐⭐⭐⭐⭐ /5</h1>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem omnis excepturi totam libero dolores saepe nemo facere quis, ad iste fugiat voluptas ratione vitae nostrum voluptate, corrupti magni, cupiditate ipsa?</p>
      <div className="h-15 w-15">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9NVBIOk_blWPFbW7lJfwX3FNO6jMIsDdZg&s"
          alt="star"
          className="h-full w-full object-contain rounded-full"
        />
      </div>
    </div>
  </div>;
};

export default UserReview;