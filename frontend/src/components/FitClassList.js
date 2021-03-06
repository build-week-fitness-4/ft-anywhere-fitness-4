import React from 'react';

import FitClassItem from './FitClassListItem'

const FitClassList = (props)=> {
    const { fitClasses } = props;

    return (
        <div className="col">
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Time</th>
                    <th>Duration</th>
                    <th>Intensity</th>
                    <th>Location</th>
                    <th>Class Size</th>
                    <th>Class Attendees</th>
                  <th></th>
                </tr>
                </thead>

                <tbody>
                    {
                      fitClasses && fitClasses.map(fitClass=> <FitClassItem key={fitClass.id} fitClass={fitClass}/>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default FitClassList;