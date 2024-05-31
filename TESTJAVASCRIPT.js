/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nfts=[]
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyecolor,city,percentage) {
    const nft={
        "NAME":name,
        "EYECOLOR":eyecolor,
        "CITY":city,
        "PERCENTAGE":percentage
    }
    nfts.push(nft);
    console.log("Minted: "+name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<nfts.length;i++){
        console.log("ID:\t"+(i+1));
        console.log("\nNAME:\t"+nfts[i].NAME);
        console.log("EYECOLOR:\t"+nfts[i].EYECOLOR);
        console.log("CITY:\t"+nfts[i].CITY);
        console.log("PERCENTAGE:\t"+nfts[i].PERCENTAGE);
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+nfts.length);

}

// call your functions below this line
mintNFT("Prabhash","blackish brown","chandigarh",85);
listNFTs();
getTotalSupply();