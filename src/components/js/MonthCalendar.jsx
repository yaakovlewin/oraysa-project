import { ArrowsPointingInIcon } from "@heroicons/react/20/solid";

export default function MonthCalendar({
    days,
    handleDayClick,
    handleDayDoubleClick,
    handleDayRightClick,
    selectedDay,
    setSelectedDay,
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
                                className="bg-white dark:bg-slate-800 p-4 ring-1 ring-slate-900/5 shadow-lg w-36 h-32 "
                                key={i}
                            >
                                <div className="flex-col space-x-3 animate-pulse">
                                    <div className="flex">
                                        <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-2 w-2 ml-1 mr-auto"></div>
                                        <div className="rounded-full bg-slate-200 dark:bg-slate-700 h-2 w-2 mr-1 ml-auto"></div>
                                    </div>
                                    <div className="flex-1 space-y-5 py-1 mt-8">
                                        <div className="space-y-3">
                                            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                            <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
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
                                    selectedDay === day
                                        ? " border border-neutral-100 shadow-lg shadow-neutral-600 rounded overflow-scroll scroll-smooth scale-125 z-10"
                                        : "border-l-2 border-t-2 border-neutral-400",
                                    "relative px-3 py-2 hover:bg-gray-100 h-28  max-w-xs w-full "
                                )}
                            >
                                {selectedDay === day && (
                                    <div
                                        className="cursor-pointer"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedDay(null);
                                        }}
                                    >
                                        <ArrowsPointingInIcon
                                            className="absolute top-0 left-0 h-4 w-4 ml-auto text-neutral-500"
                                            aria-hidden="true"
                                        />
                                    </div>
                                )}
                                <time
                                    dateTime={day.date}
                                    className={classNames(
                                        day.isToday
                                            ? "inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                                            : undefined,
                                        "px-2"
                                    )}
                                >
                                    {
                                        day.date
                                            .split("-") // split the date into an array
                                            .pop() // get the last element of the array
                                            .replace(/^0/, "") // remove the leading zero
                                    }
                                </time>
                                {day.hebDate.heDateParts.d && (
                                    <p className=" top-0 right-0 inline-flex float-right items-center justify-center px-3 py-1 text-xs leading-none ">
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
                                                                ? `text-gray-900 ${
                                                                      event.backgroundColor ||
                                                                      " bg-orange-400"
                                                                  }`
                                                                : "text-zinc-400 bg-cyan-200",
                                                            "flex-auto truncate leading-tight rounded  text-white my-0.5 px-2 group-hover:text-indigo-600"
                                                        )}
                                                    >
                                                        {event.name ?? event}
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
                                        {selectedDay === day &&
                                            selectedDay.events.length > 3 &&
                                            selectedDay.events
                                                .slice(3)
                                                .map((event) => (
                                                    <li
                                                        key={event.id}
                                                        className=""
                                                    >
                                                        <a
                                                            href={event.href}
                                                            className="group flex"
                                                        >
                                                            <p
                                                                className={classNames(
                                                                    day.isCurrentMonth
                                                                        ? `text-gray-900 ${
                                                                              day.backgroundColor
                                                                                  ? day.backgroundColor
                                                                                  : " bg-orange-400"
                                                                          }`
                                                                        : "text-zinc-400 bg-cyan-200",
                                                                    "flex-auto truncate leading-tight rounded  text-white my-0.5 px-2 group-hover:text-indigo-600"
                                                                )}
                                                            >
                                                                {event.name ??
                                                                    event}
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
                                        {selectedDay !== day &&
                                            day.events.length > 3 && (
                                                <li className="text-gray-600 font-semibold leading-4 cursor-pointer hover:bg-neutral-200 hover:text-gray-500">
                                                    + {day.events.length - 3}{" "}
                                                    more
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
