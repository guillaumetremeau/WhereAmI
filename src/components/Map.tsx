import React from 'react'

let MapComp = ({onSubmit, isQuestion}:{onSubmit:any,isQuestion: boolean}) => {
    if (isQuestion) {
        return (
            <div>
                Map
                <form action="MAKE_SUGGESTION" onSubmit={onSubmit()}>
                    <button type="submit">Make Suggestion</button>
                </form>
            </div>
        )
    } else {
        return (
            <div>
                Map Showing distance
            </div>
        )
    }
    
}
export default MapComp;