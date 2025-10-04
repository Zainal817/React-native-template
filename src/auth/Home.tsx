import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
} from 'react-native';

const features = [
  {id: '1', title: 'Discover', subtitle: 'Explore curated content', icon: null},
  {id: '2', title: 'Create', subtitle: 'Make something beautiful', icon: null},
  {id: '3', title: 'Connect', subtitle: 'Meet your people', icon: null},
  {id: '4', title: 'Grow', subtitle: 'Track progress over time', icon: null},
];

export default function Home(): JSX.Element {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, {opacity: fadeAnim}]}> 
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Good morning 👋</Text>
            <Text style={styles.headerSubtitle}>Welcome back — your day is ready</Text>
          </View>
          <TouchableOpacity style={styles.avatar}>
            <Text style={styles.avatarText}>JC</Text>
          </TouchableOpacity>
        </View>

        {/* Search bar */}
        <View style={styles.section}>
          <TextInput
            placeholder="Search projects, people, ideas..."
            placeholderTextColor="#9CA3AF"
            style={styles.searchInput}
          />
        </View>

        {/* Spotlight Card */}
        <TouchableOpacity activeOpacity={0.9} style={styles.spotlightCard}>
          <View style={styles.spotlightContent}>
            <View style={{flex: 1}}>
              <Text style={styles.spotlightTitle}>Today — Make it wonderful</Text>
              <Text style={styles.spotlightSubtitle}>A curated collection of tasks to move your goals forward.</Text>

              <View style={styles.spotlightActions}>
                <TouchableOpacity style={styles.planButton}>
                  <Text style={styles.planButtonText}>View plan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.startButton}>
                  <Text style={styles.startButtonText}>Start</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Image
              source={{uri: 'https://picsum.photos/200'}}
              style={styles.spotlightImage}
            />
          </View>
        </TouchableOpacity>

        {/* Features Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick actions</Text>
          <View style={styles.featuresGrid}>
            {features.map((f) => (
              <TouchableOpacity key={f.id} style={styles.featureCard}>
                <View style={styles.featureContent}>
                  <View style={styles.featureIcon}>
                    <Text style={styles.featureIconText}>{f.title.slice(0,1)}</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles.featureTitle}>{f.title}</Text>
                    <Text style={styles.featureSubtitle}>{f.subtitle}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Progress / Cards */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Highlights</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.highlightCard}>
                <Text style={styles.highlightLabel}>Workspace</Text>
                <Text style={styles.highlightTitle}>Design Sprint</Text>
                <Text style={styles.highlightSubtitle}>Due • Sep 23</Text>
              </View>
              <View style={styles.highlightCard}>
                <Text style={styles.highlightLabel}>Growth</Text>
                <Text style={styles.highlightTitle}>Weekly Goals</Text>
                <Text style={styles.highlightSubtitle}>3 / 5 completed</Text>
              </View>
              <View style={styles.highlightCard}>
                <Text style={styles.highlightLabel}>Community</Text>
                <Text style={styles.highlightTitle}>Mentor Match</Text>
                <Text style={styles.highlightSubtitle}>2 new messages</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* CTA */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaTitle}>Ready to make something wonderful?</Text>
          <Text style={styles.ctaSubtitle}>Start a new project and invite collaborators in seconds.</Text>
          <View style={styles.ctaActions}>
            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createButtonText}>Create Project</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.templateButton}>
              <Text style={styles.templateButtonText}>Explore Templates</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* Bottom nav */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navActive}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navInactive}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navInactive}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={styles.navInactive}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#4F46E5',
    fontWeight: '700',
  },
  section: {
    marginBottom: 24,
  },
  searchInput: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  spotlightCard: {
    backgroundColor: '#6366F1',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 24,
  },
  spotlightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spotlightTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  spotlightSubtitle: {
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
  },
  spotlightActions: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
  },
  planButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
    marginRight: 12,
  },
  planButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  startButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  startButtonText: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  spotlightImage: {
    width: 84,
    height: 84,
    borderRadius: 18,
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: 12,
    width: '48%',
  },
  featureContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  featureIconText: {
    color: '#4F46E5',
    fontWeight: '700',
  },
  featureTitle: {
    fontWeight: '600',
  },
  featureSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  highlightCard: {
    width: 256,
    marginRight: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  highlightLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  highlightSubtitle: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
  },
  ctaCard: {
    marginBottom: 40,
    borderRadius: 16,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  ctaTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  ctaSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 8,
  },
  ctaActions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  createButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  templateButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  templateButtonText: {
    fontWeight: '600',
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    alignItems: 'center',
  },
  navItem: {
    alignItems: 'center',
  },
  navActive: {
    fontSize: 14,
    fontWeight: '500',
  },
  navInactive: {
    fontSize: 14,
    color: '#9CA3AF',
  },
});