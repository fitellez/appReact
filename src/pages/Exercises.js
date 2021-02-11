import React from 'react'
import Welcome from '../componets/Welcome'
import ExerciseList from '../componets/EjerciseList'
import AddButtom from '../componets/Boton'

const Exercises = ({data}) => (
    // eslint-disable-next-line no-sequences
   
    <React.Fragment>
        <Welcome 
            username="Raúl"
        />
        <ExerciseList 
            exercises={data}
        />
        <AddButtom />
    </React.Fragment>
)

export default Exercises