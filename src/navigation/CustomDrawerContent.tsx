// components/CustomDrawerContent.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://your-image-url.com/profile-pic.jpg' }} // Replace with your profile image URL
          style={styles.profilePic}
        />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@example.com</Text>
      </View>

      {/* Drawer Navigation Items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#4A90E2', // Background color for profile
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileEmail: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
  },
  footerButton: {
    padding: 10,
    backgroundColor: '#4A90E2',
    borderRadius: 50,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  footerButtonHovered: {
    backgroundColor: '#3578E5', // Darker shade for hover effect
  },
});

export default CustomDrawerContent;
