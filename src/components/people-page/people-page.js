import React, { Component } from 'react'

import PersonDetails from '../person-details' 
import ItemList from '../item-list'
import ErrorIndicator from '../error-indicator'

import './people-page.css'
import SwapiService from '../../services/swapi-service'

const Row = ({ left, right }) => {
   return (
      <div className="row mb2">
            <div className="col-md-6">
               {left}
            </div>
            <div className="col-md-6">
               {right}
            </div>
         </div>
   )
}



export default class PeoplePage extends Component {

   swapiService = new SwapiService()

   state = {
      selectedPerson: 3,
      hasError: false
   }

   componentDidCatch(error, info) {
      debugger

      this.setState({
         hasError: true
      })
   }

   onPersonSelected = (selectedPerson) => {
      this.setState({
          selectedPerson
      })
  }

   render() {

      if(this.state.hasError) {
         return <ErrorIndicator/>
      }

      const itemList = (
         <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={(item) => `${item.name} (${item.birthYear})`}/>
       )

      const personDetails = (
         <PersonDetails personId={this.state.selectedPerson}/>
      )

      return (
            <Row left={itemList} right={personDetails}/>
      )
   }
}