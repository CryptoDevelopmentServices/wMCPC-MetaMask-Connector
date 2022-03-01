var tipButton1 = document.querySelector('.tip-button1')
tipButton1.addEventListener('click', async function() {
  if (typeof ethereum === 'undefined') {
    return renderMessage('You need to install MetaMask to use this feature.  https://metamask.io')
  }

  const accounts = await ethereum.request({method:'eth_requestAccounts'})
  var user_address = accounts[0]

  try {
    const transactionHash = await ethereum.request({
      method: 'eth_sendTransaction',
      params: [
        {
          'to': '0x136ae4016E3b19af6351EeDc1966f9468cD04197',
          'from': user_address,
          'value': '0x6F05B59D3B20000',
        },
      ],
    })
    // Handle the result
    console.log(transactionHash)
  } catch (error) {
    console.error(error)
  }
})
function renderMessage (message) {}