
import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
   constructor(props) {
       super(props);
       this.state = {
           search: "",
           type1: "All",
           type2: "All",
           sortAZ: false
       };
   }
   
   onSearch = (event) => {
       this.setState({search: event.target.value.trim().toLowerCase()});
   }

   onType1 = (event) => {
      this.setState({type1:event});
   }

   onType2 = (event) => {
      this.setState({type2:event});
   }

   onSortAZ = (event) => {
      this.setState({sortAZ:true});
   }


   filterItem = (item) => {
        if(this.state.type1 === "All" && this.state.type2 === "All") {
            return item.name.toLowerCase().search(this.state.search) !== -1;
        }

        if (this.state.type1 === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1
          && item.type2 === this.state.type2;
        }

        if (this.state.type2 === "All") {
          return item.name.toLowerCase().search(this.state.search) !== -1 &&
          item.type1 === this.state.type1; 
        }
        
        return item.name.toLowerCase().search(this.state.search) !== -1
        && item.type1 === this.state.type1
        && item.type2 === this.state.type2;
       
   }

    processList = () => {
      if (this.state.sortAZ === true) {
        this.props.items.sort(function(a, b) {
          return a.name.localeCompare(b.name);
        });
      }
      
      return this.props.items.filter(this.filterItem)
     }

    render() {
       return (
            <div className="filter-list">
               <h1>RISD MAJORS</h1>
              
               <ButtonGroup>
               <DropdownButton id="typeDropdown" title={"BFA / MFA"} onSelect={this.onType1}>
                 <MenuItem eventKey="All">All</MenuItem>
                 <MenuItem eventKey="BFA">BFA</MenuItem>
                 <MenuItem eventKey="BFA+MFA">BFA + MFA</MenuItem>
               </DropdownButton>

               <DropdownButton id="typeDropdown" title={"Design / Fine Art"} onSelect={this.onType2}>
                 <MenuItem eventKey="All">All</MenuItem>
                 <MenuItem eventKey="Design">Design</MenuItem>
                 <MenuItem eventKey="Fine Art">Fine Art</MenuItem>
               </DropdownButton>
                
               <Button title={"Sort A to Z"} onClick={this.onSortAZ}>Sort A to Z</Button>
               </ButtonGroup>
              
               <input type="text" placeholder="Search" onChange={this.onSearch} />
               

               <List items={this.processList()}/>

           </div>
       );
   }
}
export default FilteredList;