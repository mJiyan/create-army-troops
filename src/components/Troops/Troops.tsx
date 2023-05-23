import { Troop } from 'src/shared/';

function Troops({ troops }: { troops: Troop | undefined }) {
  return (
    <div className="relative  bg-white shadow-lg h-72 w-56 overflow-auto ring-1 ring-slate-900/5">
      <div>
        <div className="sticky top-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1">
          Troops
        </div>
        <div className="divide-y dark:divide-slate-200/5">
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://t4.ftcdn.net/jpg/02/70/81/09/360_F_270810946_LC46hvVrxG3JNixKLJfZiiZsXKxnVzrh.jpg"
              alt="archer_icon"
            />
            <span>
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Archers:{' '}
              </strong>
              {troops?.archers ?? 0}
            </span>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbahEtE5r3LjyWx7GV9snQnYLtO1F8jPahcw&usqp=CAU"
              alt="swordsmen_icon"
            />
            <span>
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Swordsmen:{' '}
              </strong>
              {troops?.swordsMen ?? 0}
            </span>
          </div>
          <div className="flex items-center gap-4 p-4">
            <img
              className="w-12 h-12 rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/003/316/859/original/spear-icon-design-illustration-free-vector.jpg"
              alt="spearmen_icon"
            />
            <span>
              <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
                Spearmen:{' '}
              </strong>
              {troops?.spearMen ?? 0}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Troops;
