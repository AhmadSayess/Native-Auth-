import axios from "axios";
const API_URL = "http://localhost:4000/api/goals/";

const createGoal = async (goalData, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.post(API_URL, goalData, config)
  
    return response.data
  }
//get all golas user
  const getGoals =async (token)=>{
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.get(API_URL,config)
  
    return response.data
  }

  //delete goals
  const deleteGoal = async (goalId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  
    const response = await axios.delete(API_URL + goalId, config)
  
    return response.data
  }
const GoalService = {
  createGoal,
  getGoals,
  deleteGoal
};
export default GoalService;
