# Implementation Plan: University & Student Hybrid Pivot for Cohort

This plan outlines the steps to rewrite the landing page content to appeal to both **students** (end-users) and **university administrators** (partners). The messaging will balance "Community and Connection" for students with "Retention and Engagement" for institutions.

## Objective
Reposition Cohort as a dual-sided platform: a vibrant social hub for students and a strategic retention tool for universities.

## Key Changes

### 1. Hero Section (`src/components/Hero.tsx`)
- **Headline**: "The Connected Campus Experience."
- **Sub-headline**: "Join your community, discover events, and connect with peers — while helping your university foster a sense of belonging for every student."
- **Dual CTAs**: 
    - "Download for Students" (App Store links)
    - "Cohort for Universities" (Secondary button leading to partner section)
- **Stats**: Mix student activity with institutional impact:
    - "500+ Campuses"
    - "92% Student Satisfaction"
    - "15% Higher Retention"

### 2. Features Section (`src/components/Features.tsx`)
- **Headline**: "Built for students, optimized for success."
- **Feature Framing**: Use "Dual Value" descriptions:
    - **Communities**: "Find your tribe (Students) / Build branded networks (Universities)."
    - **Events**: "Never miss out (Students) / Centralize student life (Universities)."
    - **Messaging**: "Connect safely (Students) / Scalable peer support (Universities)."
    - **NEW Feature**: "Actionable Insights" (Specifically for university partners).

### 3. New "Institutional Impact" Section (or update `MessagingSection.tsx`)
- **Topic**: "Bridging the Gap from Offer to Orientation."
- **Content**: Highlight how Cohort reduces "Summer Melt" and loneliness through early digital onboarding.
- **Pitch**: "Turn offer-holders into confident enrollees by fostering emotional commitment before they step on campus."

### 4. Communities Preview (`src/components/CommunitiesPreview.tsx`)
- Show a mix of student-led clubs and university-official channels (e.g., "Orientation 2026", "Dept of Engineering", "Photography Club").

### 5. Testimonials (`src/components/Testimonials.tsx`)
- Include one student quote (social value) and one administrator quote (institutional value).

### 6. Final CTA Section (`src/components/FinalCTA.tsx`)
- **Headline**: "Join the future of the student experience."
- **Dual CTA**: "Get Started as a Student" and "Request an Institutional Demo."

## Verification & Testing
1. **Audience Balance**: Ensure the tone doesn't feel too corporate for students nor too casual for administrators.
2. **Visual Hierarchy**: Ensure the "For Universities" path is clearly discoverable without detracting from the app's primary social appeal.
3. **Responsive Design**: Test the new dual-CTA buttons on mobile.
