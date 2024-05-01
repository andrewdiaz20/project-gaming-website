import React from "react"
import {useState, useEffect} from 'react'

function TempSearch() {
    return (
        <div>
            <h1>Game of the Day </h1>
            <h3>Rate and comment on the game</h3>
            <form id= "searchForm">
                <input for="gameName" placeholder="Enter name of the game"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default TempSearch