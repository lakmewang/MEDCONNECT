import React from "react";
import { motion } from "framer-motion";
import {Flex,
  Grid,
  GridItem,
  Box
} from '@chakra-ui/react';


export const BouncyCardsFeatures = () => {
  return (
    <Flex justifyContent={'center'} alignItems="center" w={'100%'} mb={10}>
    <Box
      style={{padding: "4px", color: "#374151" }}
      w={'80%'}
    >
      <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4px"}}>
        <h2 style={{ maxWidth: "50rem", fontSize: "2.5rem", fontWeight: "bold", }}>
        Unlock the Potential of Our Digital Health Hub: Next-Gen Solutions for 
          <span style={{ color: "#9CA3AF" }}> Seamless Wellness</span>
        </h2>
        

      </div>
      <Grid templateColumns='repeat(3, 5fr)'gap={5} >
        {/* BounceCard 1 */}
        <GridItem colSpan={2} >
        <motion.div 
          whileHover={{ scale: 0.95, rotate: "-1deg" }}
          style={{ cursor: "pointer", overflow: "hidden", minHeight: "12rem", borderRadius: "0.75rem", backgroundColor: "#F3F4F6", padding: "2rem" }}
        >
          <h3 style={{ margin: "0 auto", textAlign: "center", fontSize: "1.875rem", fontWeight: "600" }}>Drug Availability</h3>
          <div style={{position: "absolute", bottom: "0", left: "1rem", right: "1rem", top: "5rem", transform: "translateY(2rem)", borderRadius: "0.5rem 0.5rem 0 0", backgroundColor: '#2caed8',transition: "transform 250ms", ":hover": { transform: "translateY(1rem) rotate(2deg)" } }}>
            <Flex justifyContent={'center'} alignItems={'center'} p={5} >
            <span style={{ display: "block", textAlign: "center", fontWeight: "600", color: "#FFF" }}> Doctors and patients can check information on the availability of drugs, including current stock quantities and drug details.</span>
            </Flex>
          </div>
        </motion.div>
        </GridItem>

        {/* BounceCard 2 */}
        <GridItem  colSpan={1} >
        <motion.div
          whileHover={{ scale: 0.95, rotate: "-1deg" }}
          style={{ cursor: "pointer", overflow: "hidden", minHeight: "12.5rem", borderRadius: "0.75rem", backgroundColor: "#F3F4F6", padding: "2rem"}}
        >
          <h3 style={{ margin: "0 auto", textAlign: "center", fontSize: "1.875rem", fontWeight: "600" }}>Online Drug Purchase</h3>
          <div style={{ position: "absolute", bottom: "0", left: "1rem", right: "1rem", top: "5rem", transform: "translateY(2rem)",
          borderRadius: "0.5rem 0.5rem 0 0",
          backgroundColor : '#319795',
          padding: "1rem",
          transition: "transform 250ms",
          ":hover": { transform: "translateY(1rem) rotate(2deg)" }
        }}>
          <span style={{ display: "block", textAlign: "center", fontWeight: "600", color: "#FFF" }}>Patients can buy the drugs. Choose to pay for an order using wallet, credit card, or cash on delivery.
</span>
        </div>
      </motion.div>
      </GridItem>



        {/* BounceCard 3 */}
        <GridItem  colSpan={1} >
        <motion.div
          whileHover={{ scale: 0.95, rotate: "-1deg" }}
          style={{ cursor: "pointer", overflow: "hidden", minHeight: "12.5rem", borderRadius: "0.75rem", backgroundColor: "#F3F4F6", padding: "2rem" }}
        >
          <h3 style={{ margin: "0 auto", textAlign: "center", fontSize: "1.875rem", fontWeight: "600" }}>Administrative Dashboard</h3>
          <div style={{ position: "absolute", bottom: "0", left: "1rem", right: "1rem", top: "5rem", transform: "translateY(2rem)", borderRadius: "0.5rem 0.5rem 0 0", backgroundColor: '#319795' , padding: "1rem", transition: "transform 250ms", ":hover": { transform: "translateY(1rem) rotate(2deg)" } }}>
            <span style={{ display: "block", textAlign: "center", fontWeight: "600", color: "#FFF" }}>Providing administrators with a dashboard to oversee and manage drug inventory, review subscription requests from doctors, and analyze overall system performance.</span>
          </div>
        </motion.div>
        </GridItem>



        {/* BounceCard 4 */}
        <GridItem colSpan={2} >
        <motion.div
          whileHover={{ scale: 0.95, rotate: "-1deg" }}
          style={{ cursor: "pointer", overflow: "hidden", minHeight: "12rem", borderRadius: "0.75rem", backgroundColor: "#F3F4F6", padding: "2rem" }}
        >
          <h3 style={{ margin: "0 auto", textAlign: "center", fontSize: "1.875rem", fontWeight: "600" }}>Personalized Chatting Option</h3>
          <div style={{ position: "absolute", bottom: "0", left: "1rem", right: "1rem", top: "5rem", transform: "translateY(2rem)", borderRadius: "0.5rem 0.5rem 0 0", backgroundColor:'#2caed8', padding: "1rem", transition: "transform 250ms", ":hover": { transform: "translateY(1rem) rotate(2deg)" } }}>
            <span style={{ display: "block", textAlign: "center", fontWeight: "600", color: "#FFF" }}>Chatting feature for patient can chat with pharmacist and pharmacist can chat with doctor.</span>
          </div>
        </motion.div>
        </GridItem>


      </Grid>
    </Box>
    </Flex>
);

}
