import Part from "./Part.jsx"
const Content = (props) => {
    return (
        <>
            {props.exercises.map(
            (prop,index) =>{
                return(
                <Part key = {index} name = {prop.name} numberofex = {prop.numberofex}></Part>)
            }

        )}
        </>
    )
}
export default Content