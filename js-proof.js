// Create an array to hold NFTs
const nftCollection = [];
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object
    const newNFT = {
      name: name,
      eyeColor: eyeColor,
      shirtType: shirtType,
      bling: bling
    };
    
    // Store the NFT object in the collection
    nftCollection.push(newNFT);
  }
  function listNFTs() {
    // Iterate through the NFT collection and print metadata
    for (const nft of nftCollection) {
      console.log("Name: " + nft.name);
      console.log("Eye Color: " + nft.eyeColor);
      console.log("Shirt Type: " + nft.shirtType);
      console.log("Bling: " + nft.bling);
      console.log("-------------"); // To separate NFTs
    }
  }
 
  function getTotalSupply() {
    return nftCollection.length;
  }
 
 
  // Call mintNFT to create NFTs
  mintNFT("NFT1", "Blue", "T-Shirt", "Gold Chain");
  mintNFT("NFT2", "Green", "Hoodie", "Diamond Ring");
  
  // Call listNFTs to print NFT metadata
  listNFTs();
  
  // Call getTotalSupply to get the total number of NFTs created
  console.log("Total NFTs created: " + getTotalSupply());
  
  
  
  
  
  
  