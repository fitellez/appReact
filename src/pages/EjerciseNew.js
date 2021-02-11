import React from 'react'
import ExerciseForm from '../componets/exerciseForm'
import Card from '../componets/Card'

const ExerciseNew = ({form,onSubmit,onChange}) =>(
    <div className="row">
                <div className="col-sm">
                    <Card
                        {...form}
                    />
                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form= {form}
                    />
                </div>
            </div>
)

export default ExerciseNew