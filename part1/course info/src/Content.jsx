const Content = (props) => {
    return (
        <>
            {props.exercises.map(
            (prop,index) =>{
                return(
                <div key = {index}>
                    <p>{prop.name}</p>
                    <p>{prop.numberofex}</p>
                </div>)
            }

        )}
        </>
    )
}
export default Content