import React from 'react'
import ItemList from '../item-list'
import { withData, withSwapiService } from '../hoc-helpers'
import SwapiService from '../../services/swapi-service'

const withChildFunction = (fn) => (Wrapped) => {
   return (props) => {
      return <Wrapped {...props}>   
                  {fn}
               </Wrapped>
   }
}

const ListWithChildren = withChildFunction(
   ItemList,
   ({name}) => <span>{name}</span>
)

const renderName = ({ name}) => <span>{name}</span>
const renderModelAndName = ({model, name}) => <span>{name} ({model})</span>

const mapPersonMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPeople
   }
}

const mapPlanetMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPeople
   }
}

const mapStarshipMethodsToProps = (swapiService) => {
   return {
      getData: swapiService.getAllPeople
   }
}

const PersonList = withSwapiService(mapPersonMethodsToProps)(
                     withData(
                        withChildFunction(renderName)(
                           ItemList)))

const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
                     withData(
                        withChildFunction(renderName)(
                           ItemList)))

const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
                        withData(
                           withChildFunction(renderName)(
                              ItemList)))

export {
   PersonList,
   PlanetList,
   StarshipList
}