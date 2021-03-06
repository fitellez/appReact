import React from 'react'
import Card from './Card'

const ExerciseList = ({exercises}) => (
    <>
    
        { exercises.map ((exercise) => (
           let data=[{
            
           }],
            <Card 
                key={exercise.id}
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
            />
        ))}
    </>    
)


export default ExerciseList