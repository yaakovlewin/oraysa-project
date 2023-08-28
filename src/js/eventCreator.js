
export default function eventCreator(name, start, end, allDay, backgroundColor, borderColor, textColor, display, props) {
    const event = {
        id: `${name} - ${start}`,
        name: name,
        start: start,
        end: end,
        allDay: allDay,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        textColor: textColor,
        display: display,
        props: props
    }
    return event;
}