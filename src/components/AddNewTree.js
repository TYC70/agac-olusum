export const AddNewTree = () => {
    return(
        <div>
            <input className="name-area" type="text" placeholder="Name" />
            <input className="point-area" type="number" defaultValue="0">Self Point</input>
            <span>Total Point: </span>
        </div>
    )
}
