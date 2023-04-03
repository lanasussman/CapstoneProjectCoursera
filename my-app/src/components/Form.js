import React, { useState } from "react";
import "./styles/Booking.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    telephone: yup.string().required(),
    guests: yup.number().min(1).required(),
    date: yup.string().required(),
})

function Form() {


    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const formSubmit = (data) => {
        console.table(data)
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)}>
            <fieldset>
                <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" {...register("name")} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" {...register("email")} />
                </div>
                <div className="field">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" name="telephone" {...register("telephone")} />
                </div>

                <div className="field occasion">
                    <label htmlFor="occasion">Occasion</label>
                    <div className="options">
                        <select name="occasion" {...register("occasion")}>
                            <option value="select"></option>
                            <option value="birthday">Birthday</option>
                            <option value="engagement">Engagement</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                </div>
                <div className="field guest">
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" name="guests" {...register("guests")} />
                </div>

                <div className="field">
                    <label htmlFor="date">Date & Time</label>
                    <input type="datetime-local" name="date" {...register("date")} />
                </div>
                <button className="reserve-btn" type="submit">Book a Table</button>
            </fieldset>
        </form>
    )
}

export default Form