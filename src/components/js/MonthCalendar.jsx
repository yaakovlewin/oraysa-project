export default function MonthCalendar({
    days,
    handleDayClick,
    handleDayDoubleClick,
    handleDayRightClick,
    selectedDay,
    classNames,
}) {
    return (
        <div className="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
            <div className="grid grid-cols-7 gap-0 border-r-2 border-t-2 border-neutral-400 bg-neutral-400 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    S<span className="sr-only sm:not-sr-only ">un</span>
                </div>
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    M<span className="sr-only sm:not-sr-only">on</span>
                </div>
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    T<span className="sr-only sm:not-sr-only">ue</span>
                </div>
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    W<span className="sr-only sm:not-sr-only">ed</span>
                </div>
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    T<span className="sr-only sm:not-sr-only">hu</span>
                </div>
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    F<span className="sr-only sm:not-sr-only">ri</span>
                </div>
                <div className="bg-white py-2 border-l-2 border-neutral-400">
                    S<span className="sr-only sm:not-sr-only">at</span>
                </div>
            </div>
            <div className="flex bg-neutral-400 text-xs leading-6 text-gray-700 lg:flex-auto">
                <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-0 lg:border-r-2 lg:border-b-2 lg:border-neutral-400">
                    {days.length === 0 &&
                        // generate 35 days placeholders to fill the grid
                        [...Array(42)].map((_, i) => (
                            <div
                                className="bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-900/5 rounded-lg shadow-lg max-w-xs w-full h-28 "
                                key={i}
                            >
                                <div className="flex space-x-4 animate-pulse">
                                    <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-10 w-10"></div>
                                    <div className="flex-1 space-y-6 py-1">
                                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        <div className="space-y-3">
                                            <div className="grid grid-cols-3 gap-4">
                                                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-2"></div>
                                                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded col-span-1"></div>
                                            </div>
                                            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    {days &&
                        days.map((day) => (
                            <div
                                key={day.date}
                                onClick={() => handleDayClick(day)}
                                onDoubleClick={() => handleDayDoubleClick(day)}
                                onContextMenu={(e) =>
                                    handleDayRightClick(e, day)
                                }
                                className={classNames(
                                    day.isCurrentMonth
                                        ? "bg-white"
                                        : "bg-slate-100 text-zinc-500 text-opacity-60",
                                    selectedDay === day &&
                                        "border-2 border-indigo-600",
                                    "relative px-3 py-2 hover:bg-gray-100 h-28  max-w-xs w-full border-l-2 border-t-2 border-neutral-400"
                                )}
                            >
                                <time
                                    dateTime={day.date}
                                    className={
                                        day.isToday
                                            ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                                            : undefined
                                    }
                                >
                                    {
                                        day.date
                                            .split("-") // split the date into an array
                                            .pop() // get the last element of the array
                                            .replace(/^0/, "") // remove the leading zero
                                    }
                                </time>
                                {day.hebDate.heDateParts.d && (
                                    <p className=" top-0 right-0 inline-flex float-right items-center justify-center px-2 py-1 text-xs leading-none ">
                                        {day.hebDate.heDateParts.d}
                                    </p>
                                )}
                                {day.events.length > 0 && (
                                    <ol
                                        className={
                                            day.events.length > 2
                                                ? "mt-1"
                                                : "mt-6"
                                        }
                                    >
                                        {day.events.slice(0, 3).map((event) => (
                                            <li key={event.id} className="">
                                                <a
                                                    href={event.href}
                                                    className="group flex"
                                                >
                                                    <p
                                                        className={classNames(
                                                            day.isCurrentMonth
                                                                ? "text-gray-900 bg-cyan-500"
                                                                : "text-zinc-400 bg-cyan-200",
                                                            "flex-auto truncate leading-tight rounded  text-white my-0.5 px-2 group-hover:text-indigo-600"
                                                        )}
                                                    >
                                                        {event.name}
                                                    </p>
                                                    <time
                                                        dateTime={
                                                            event.datetime
                                                        }
                                                        className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                                                    >
                                                        {event.time}
                                                    </time>
                                                </a>
                                            </li>
                                        ))}
                                        {day.events.length > 3 && (
                                            <li className="text-gray-500">
                                                + {day.events.length - 2} more
                                            </li>
                                        )}
                                    </ol>
                                )}
                            </div>
                        ))}
                </div>
                <div className="isolate grid w-full grid-cols-7 grid-rows-6 gap-px bg-neutral-200 border-r-2 border-b-2 border-neutral-400 lg:hidden">
                    {days &&
                        days.map((day) => (
                            <button
                                key={day.date}
                                type="button"
                                onClick={() => handleDayClick(day)}
                                className={classNames(
                                    day.isCurrentMonth
                                        ? "bg-white"
                                        : "bg-gray-200",
                                    (day === selectedDay || day.isToday) &&
                                        "font-semibold px-0.5",
                                    day === selectedDay && "text-white",
                                    day !== selectedDay &&
                                        day.isToday &&
                                        "text-indigo-600",
                                    day !== selectedDay &&
                                        day.isCurrentMonth &&
                                        !day.isToday &&
                                        "text-gray-900",
                                    day !== selectedDay &&
                                        !day.isCurrentMonth &&
                                        !day.isToday &&
                                        "text-gray-500",
                                    "flex h-14 flex-col px-1 sm:px-3 py-2 hover:bg-gray-100 focus:z-10 border-l-2 border-t-2 border-neutral-400"
                                )}
                            >
                                <section className="flex w-full">
                                    <time
                                        dateTime={day.date}
                                        className={classNames(
                                            day === selectedDay &&
                                                "flex h-6 w-6 items-center justify-center rounded-full",
                                            day === selectedDay &&
                                                day.isToday &&
                                                "bg-indigo-600 p-1 mr-auto text-white",
                                            day === selectedDay &&
                                                !day.isToday &&
                                                "bg-gray-900 p-1 mr-auto text-white",
                                            "mr-auto"
                                        )}
                                    >
                                        {day.date
                                            .split("-")
                                            .pop()
                                            .replace(/^0/, "")}
                                    </time>
                                    {day.hebDate.heDateParts.d && (
                                        <p className=" ml-auto text-black font-medium pl-1">
                                            {day.hebDate.heDateParts.d}
                                        </p>
                                    )}
                                </section>

                                <span className="sr-only">
                                    {day.events.length} events
                                </span>
                                {day.events.length > 0 && (
                                    <span className="-mx-0.5 mt-auto flex flex-wrap-reverse">
                                        {day.events.map((event) => (
                                            <span
                                                key={event.id}
                                                className="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
                                            />
                                        ))}
                                    </span>
                                )}
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}
