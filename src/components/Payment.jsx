import React from 'react'
import {useState} from "react"
import {useSelector} from "react-redux"
import Web3 from 'web3';






const Payment = () => {

    const [account, setAccount] = useState(null)  
    const [balance, setBalance] = useState(null)

    const web3 = new Web3(window.ethereum)




    const {total} = useSelector((state)=> state.cart)
    
    const amountInEther = total/2000;
    const finalValueToString = web3.utils.toWei(amountInEther.toString(), 'ether')
    console.log(finalValueToString)





    const connectToWallet= async()=> {
        if(window.ethereum) {
            try{
                await window.ethereum.request({method: 'eth_requestAccounts'});

                

                const accounts = await web3.eth.getAccounts()   
                console.log('Connected to MetaMask:', accounts)
                setAccount(accounts[0])
                
                

                const userbal = await web3.eth.getBalance(accounts[0])
                
                setBalance(userbal)
                console.log(userbal)

            }catch (error){
                console.error("Metamask not connected")
            }
        }

        else{
            alert ("install metamask wallet extension")
        }
    }

  


    const processPayment= async()=> {
        
            try{
               

              

                const payment= await web3.eth.sendTransaction({
                    from: account,
                    to: "0x8a6bdbb867fe904c4b397dce1e6d2c943da385c9",
                    value: finalValueToString,
                    gas: Number(20000).toString(16),
                    gasPrice: Number(2000000000).toString(16),

                    
                  });
              

                console.log(payment)

                  
                }
            
                catch (error) {
                    console.log("error")
                }
           
    }

  
  return (
    <div className='lets'>
   <h1>Connect Metamask Wallet</h1>
   <button onClick = {connectToWallet}>tap to connect</button>

   <p>Address : {account}</p>
   <p>Balance: ${balance}</p>

   
   <button onClick={processPayment}>send payment</button>
  </div>
  )
}

export default Payment


