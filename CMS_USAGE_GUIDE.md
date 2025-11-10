# Artfelt Therapy CMS - Usage Guide & Custom Prompts

## 🎯 Quick Start

Your Custom CMS is now live! Here's everything you need to know.

### Access Your CMS

**Admin Dashboard:** `http://localhost:3000/admin/login`

**Default Credentials:**
- Email: `admin@artfelt.com`
- Password: `admin123`

⚠️ **Change your password after first login!**

---

## 📚 Table of Contents

1. [Dashboard Overview](#dashboard-overview)
2. [Managing Services](#managing-services)
3. [Editing Home Page](#editing-home-page)
4. [Custom Prompts for Content](#custom-prompts-for-content)
5. [Database Management](#database-management)
6. [Deployment](#deployment)

---

## 🏠 Dashboard Overview

After logging in, you'll see:

- **Stats Cards:** Overview of your content (services, sections, posts)
- **Quick Actions:** Direct links to manage different content types
- **Navigation:** Easy access to all CMS features

---

## 🎨 Managing Services

### View All Services

Navigate to **Admin → Services** to see all therapy services.

Each service shows:
- Icon, title, and pricing
- Active/Inactive status
- Order number (controls display order)
- Action buttons (Edit, Activate/Deactivate, View Live, Delete)

### Add a New Service

Click **"Add New Service"** button (coming soon in UI, use API for now)

#### Custom Prompt for Adding Service:

```
Create a new therapy service with the following details:
- Title: [Service Name]
- Slug: [url-friendly-name]
- Icon: [emoji, e.g., 🎨]
- Tagline: [One-line description]
- Description: [2-3 paragraphs about the service]
- Best For: [5 bullet points of who this helps]
- How It Works: [1-2 paragraphs explaining the process]
- Session Length: [e.g., "60 minutes"]
- Format: [online/in-person/both]
- Frequency: [e.g., "Weekly or bi-weekly"]
- Pricing: [number only, e.g., 3500]
- CTA Text: [e.g., "Book This Service"]
- Order: [number for display order]
```

#### Example Service Entry:

```json
{
  "title": "Couples Art Therapy",
  "slug": "couples-art-therapy",
  "icon": "💕",
  "tagline": "Strengthen your relationship through creative expression",
  "description": "In couples art therapy, partners work together through art-making to improve communication, resolve conflicts, and deepen emotional connection. This unique approach allows couples to express feelings that might be difficult to verbalize, creating new pathways for understanding and healing together.",
  "bestFor": [
    "Couples experiencing communication difficulties",
    "Partners navigating life transitions together",
    "Relationships recovering from trust issues",
    "Couples seeking deeper emotional connection",
    "Pre-marital counseling with a creative approach"
  ],
  "howItWorks": "In each session, I guide you through collaborative art activities designed to foster communication and connection. The creative process becomes a safe space to explore relationship dynamics, practice new ways of interacting, and build shared experiences. No art experience needed—the focus is on the process and what it reveals about your relationship.",
  "sessionLength": "90 minutes",
  "format": "both",
  "frequency": "Weekly or bi-weekly",
  "pricing": 5000,
  "ctaText": "Book Couples Therapy",
  "order": 5
}
```

### Edit Existing Service

1. Click **"Edit"** on any service
2. Update the fields you want to change
3. Click **"Save Changes"**
4. Changes appear immediately on the live site

### Deactivate a Service

Click **"Deactivate"** to hide a service from the public website without deleting it.

Inactive services:
- Still visible in admin dashboard
- Not shown on public website
- Can be reactivated anytime

---

## 🏡 Editing Home Page

Navigate to **Admin → Edit Home Page**

### Available Sections:

#### 1. Hero Section
- **Title:** Main headline visitors see first
- **Subtitle:** Your tagline/credentials
- **Description:** Brief intro (2-3 sentences)
- **Button Text:** CTA button text
- **Button Link:** Where the button goes

**Custom Prompt for Hero:**
```
Update the hero section with:
- A compelling headline that speaks to [target audience]
- A subtitle highlighting [key credentials/value proposition]
- A description that addresses [main pain point] and offers [solution]
- Keep it warm, professional, and authentic to Divya's voice
```

#### 2. About Section
- **Title:** Section heading
- **Description:** About Divya/practice
- **Button Text:** Link text
- **Button Link:** URL to full about page

### Editing Process:

1. Click **"Edit"** on a section
2. Update the fields
3. Preview changes (changes are immediate)
4. Click **"Save Changes"**

---

## 📝 Custom Prompts for Content Creation

### Prompt: Write Service Description

```
Write a service description for [Service Name] that:
1. Explains what the service is in 2-3 paragraphs
2. Uses warm, approachable language
3. Addresses the target audience's pain points
4. Highlights Divya's unique qualifications (teaching background, clinical training)
5. Emphasizes that no art experience is needed
6. Creates emotional connection while remaining professional
7. Is optimized for SEO with natural keyword integration

Target audience: [describe audience]
Key benefits: [list 3-5 benefits]
Tone: Warm, professional, empathetic, authentic
```

### Prompt: Generate "Best For" List

```
Create a "Best For" list for [Service Name] that:
1. Lists 5 specific situations or challenges
2. Uses clear, relatable language
3. Addresses diverse needs
4. Feels inclusive and non-judgmental
5. Highlights the breadth of applicability

Service type: [therapy/coaching/workshop]
Main focus: [primary therapeutic goal]
```

### Prompt: Write "How It Works"

```
Explain how [Service Name] works in 1-2 paragraphs that:
1. Demystifies the process
2. Reduces anxiety about the unknown
3. Emphasizes safety and support
4. Highlights Divya's teaching background
5. Clarifies what to expect
6. Reassures about skill level (no experience needed)

Format: [online/in-person/both]
Duration: [session length]
Structure: [individual/group]
```

### Prompt: Create Workshop Description

```
Write a workshop description for: [Workshop Topic]

Include:
- Catchy title (5-7 words)
- Engaging tagline
- What participants will learn (3-5 bullet points)
- Who should attend
- What to expect during the session
- Takeaways (practical tools/insights)
- Duration and format

Tone: Inviting, energetic, supportive, community-focused
Focus: Psychoeducation + experiential learning
```

---

## 🗄️ Database Management

### View Database Locally

Use Prisma Studio to browse your database:

```bash
npm run db:studio
```

This opens a GUI at `http://localhost:5555` where you can:
- View all tables
- Edit records
- Add new entries
- Delete data
- Run queries

### Backup Database

#### SQLite (Local):
```bash
# Create backup
cp prisma/dev.db prisma/backup-$(date +%Y%m%d).db

# Restore backup
cp prisma/backup-YYYYMMDD.db prisma/dev.db
```

#### Postgres (Production):
Vercel handles automatic backups. You can also:
1. Go to Vercel Dashboard → Storage → Your Database
2. Click "Backups" tab
3. Download or restore backups

### Reset Database

⚠️ **WARNING:** This deletes all data!

```bash
# Delete database
rm prisma/dev.db

# Recreate and seed
DATABASE_URL="file:./dev.db" npx prisma migrate dev --name init
npm run db:seed
```

---

## 📊 Content Strategy Guide

### Service Naming Best Practices

**Good Names:**
- 1:1 Art Psychotherapy
- Short-Term Counseling
- Creative Life Coaching
- Teen Art Therapy Sessions

**Avoid:**
- Generic names ("Therapy")
- Jargon ("CBT-Based Intervention")
- Overly long names

### SEO Optimization

Each service should include:
- **Primary keyword** in title
- **Secondary keywords** in description
- **Location** (Mumbai, India) where relevant
- **Action-oriented** CTA text
- **Natural language** (not keyword stuffing)

### Pricing Strategy

Current pricing structure:
- **Workshops:** ₹1,500 (accessible entry point)
- **Counseling:** ₹2,500 (short-term support)
- **Life Coaching:** ₹3,000 (goal-oriented)
- **Art Psychotherapy:** ₹3,500 (clinical depth)
- **Couples Therapy:** ₹5,000 (extended sessions)

### Content Tone Guidelines

**Do:**
- Use first person ("I guide you...")
- Be warm and approachable
- Address reader directly ("you")
- Acknowledge feelings/challenges
- Emphasize safety and support
- Highlight unique qualifications
- Use inclusive language

**Don't:**
- Be overly clinical
- Use complex jargon
- Make promises/guarantees
- Be too formal or distant
- Rush the reader
- Assume prior knowledge

---

## 🚀 Deployment

### Deploy to Production

1. **Commit changes:**
```bash
git add .
git commit -m "Update CMS content"
git push
```

2. **Vercel automatically deploys** when you push to your branch

3. **Migration to Postgres:** See `VERCEL_POSTGRES_MIGRATION.md`

### Environment Variables

Required in production:
- `DATABASE_URL` - Postgres connection string
- Any API keys (Razorpay, Resend, etc.)

Set these in:
- Vercel Dashboard → Settings → Environment Variables

---

## 🛠️ Advanced Usage

### API Endpoints

Your CMS exposes these API endpoints:

**Public:**
- `GET /api/services` - List all active services
- `GET /api/services/[slug]` - Get single service
- `GET /api/home` - Get home page content

**Admin (requires authentication):**
- `GET /api/admin/services` - List all services (including inactive)
- `POST /api/admin/services` - Create service
- `PUT /api/admin/services/[id]` - Update service
- `DELETE /api/admin/services/[id]` - Delete service
- `GET /api/admin/home` - List home content
- `PUT /api/admin/home/[id]` - Update home section

### Direct Database Queries

Using Prisma Client:

```typescript
import { prisma } from '@/lib/prisma'

// Get all services
const services = await prisma.service.findMany()

// Create new service
const service = await prisma.service.create({
  data: {
    title: "New Service",
    slug: "new-service",
    // ... other fields
  }
})

// Update service
await prisma.service.update({
  where: { id: "service-id" },
  data: { pricing: 3000 }
})

// Delete service
await prisma.service.delete({
  where: { id: "service-id" }
})
```

---

## 🐛 Troubleshooting

### Can't login to admin

1. Check you're using correct credentials (admin@artfelt.com / admin123)
2. Clear browser cookies
3. Verify database is seeded: `npm run db:seed`

### Changes not showing on website

1. Check service is marked "Active"
2. Clear browser cache
3. Check database in Prisma Studio
4. Restart dev server: `npm run dev`

### Database errors

```bash
# Regenerate Prisma Client
npx prisma generate

# Reset database
rm prisma/dev.db
DATABASE_URL="file:./dev.db" npx prisma migrate dev
npm run db:seed
```

---

## 📞 Support

For help with:
- **CMS features:** Check this guide
- **Content strategy:** Use custom prompts above
- **Technical issues:** See troubleshooting section
- **Deployment:** See `VERCEL_POSTGRES_MIGRATION.md`

---

## 🎉 You're All Set!

Your custom CMS is ready to power your therapy practice website. Start by:

1. Logging into the admin dashboard
2. Reviewing existing services
3. Making small edits to test
4. Adding your first custom content
5. Deploying to production when ready

**Happy content managing! 🚀**
