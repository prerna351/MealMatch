import React, { useState } from 'react';
import { Heading } from '../Headings/Heading';
import { CheckBox } from '../InputBoxes/CheckBox';
import { Button } from '../buttons/Button';
import { useSetRecoilState } from 'recoil';
import { currentFormState } from '../../store/atoms/currentFormState';

export const ServiceInfoForms = () => {
  const setForm = useSetRecoilState(currentFormState)
  const initialDaysState = {
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  };

  const initialMealsState = {
    Breakfast: false,
    Lunch: false,
    Dinner: false,
  };

  const [days, setDays] = useState(initialDaysState);
  const [meals, setMeals] = useState(initialMealsState);
  const [selectAllDays, setSelectAllDays] = useState(false);
  const [selectAllMeals, setSelectAllMeals] = useState(false);

  const handleDaysChange = (e) => {
    const { name, checked } = e.target;
    setDays((prevDays) => ({
      ...prevDays,
      [name]: checked,
    }));
  };

  const handleMealsChange = (e) => {
    const { name, checked } = e.target;
    setMeals((prevMeals) => ({
      ...prevMeals,
      [name]: checked,
    }));
  };

  const handleSelectAllDays = () => {
    setSelectAllDays(!selectAllDays);
    setDays((prevDays) => {
      const updatedDays = {};
      for (let day in prevDays) {
        updatedDays[day] = !selectAllDays;
      }
      return updatedDays;
    });
  };

  const handleSelectAllMeals = () => {
    setSelectAllMeals(!selectAllMeals);
    setMeals((prevMeals) => {
      const updatedMeals = {};
      for (let meal in prevMeals) {
        updatedMeals[meal] = !selectAllMeals;
      }
      return updatedMeals;
    });
  };

  return (
    <div className="w-full md:min-w-[500px] flex flex-col gap-8 p-4 md:p-10 md:shadow-md md:border bg-white">
      <div>
        <Heading heading={"Working Days"} subHeading={"Check the days you provide service"} />
        
            
            <div className="flex gap-3 justify-between mt-4">
            <div className="flex flex-col  gap-2">
                {Object.keys(initialDaysState).slice(0, 4).map((day) => (
                <CheckBox
                    key={day}
                    label={day}
                    name={day}
                    checked={days[day]}
                    onChange={handleDaysChange}
                />
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {Object.keys(initialDaysState).slice(4).map((day) => (
                <CheckBox
                    key={day}
                    label={day}
                    name={day}
                    checked={days[day]}
                    onChange={handleDaysChange}
                />
                ))}
            </div>

            <div
            className="text-green-600 text-sm font-medium cursor-pointer "
            onClick={handleSelectAllDays}
            >
            {selectAllDays ? 'Unselect All' : 'Select All'}
            </div>
            
        </div>
      </div>

        <div>
            <Heading heading={"Meal Timings"} subHeading={"Check the Timings of meal you provide"} />
            <div className='flex justify-between  mt-4 '>
                <div className='flex flex-col gap-3 '>
                    {Object.keys(initialMealsState).map((meal) => (
                        <CheckBox
                        key={meal}
                        label={meal}
                        name={meal}
                        checked={meals[meal]}
                        onChange={handleMealsChange}
                        />
                    ))}
                </div>
                <div
                    className="text-green-600 text-sm font-medium cursor-pointer"
                    onClick={handleSelectAllMeals}
                >
                    {selectAllMeals ? 'Unselect All' : 'Select All'}
                </div>
            </div>
        </div>
        {days && meals ?  <Button label={"Save & Continue"} onClick={()=>{setForm('MealForm')}}></Button> :  <Button label={"Save & Continue"} onClick={()=>{setForm('MealForm')}}></Button>}
    </div>
  );
};
