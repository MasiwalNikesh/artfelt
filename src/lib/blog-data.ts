import { BlogPost, BlogCategory } from "@/types/blog"

export const blogCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Art Therapy Insights",
    slug: "art-therapy-insights",
    description: "Understanding the practice and benefits of art therapy",
    color: "sage",
  },
  {
    id: "2",
    name: "Mental Wellness",
    slug: "mental-wellness",
    description: "Tips and practices for emotional and mental health",
    color: "terracotta",
  },
  {
    id: "3",
    name: "Creative Expression",
    slug: "creative-expression",
    description: "Exploring creativity as a tool for healing and growth",
    color: "soft-blue",
  },
  {
    id: "4",
    name: "Self-Discovery",
    slug: "self-discovery",
    description: "Journey inward through art and reflection",
    color: "sage",
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "what-is-art-therapy-beginners-guide",
    title: "What is Art Therapy? A Beginner's Guide to Creative Healing",
    excerpt:
      "Discover how art therapy combines creative expression with psychological healing, and why you don't need to be an artist to benefit from it.",
    content: `
# What is Art Therapy? A Beginner's Guide to Creative Healing

Art therapy is a form of expressive therapy that uses the creative process of making art to improve a person's physical, mental, and emotional well-being. As an art therapist, I often hear the misconception that you need to be "good at art" to benefit from art therapy. Let me assure you—nothing could be further from the truth.

## The Power of Creative Expression

Art therapy isn't about creating masterpieces or perfect drawings. It's about the process, not the product. When we engage in creative activities, we tap into parts of our brain and emotions that words alone cannot reach. The act of putting color to paper, shaping clay, or arranging collage pieces can help us:

- **Express emotions that are difficult to verbalize**
- **Process traumatic experiences in a safe way**
- **Reduce stress and anxiety**
- **Increase self-awareness**
- **Build confidence and self-esteem**

## How Art Therapy Works

In an art therapy session, I guide clients through creative exercises designed to explore specific feelings, memories, or challenges. The artwork becomes a bridge between the conscious and unconscious mind, revealing insights that might otherwise remain hidden.

For example, a simple exercise like drawing how you feel can reveal surprising information about your emotional state. The colors you choose, the pressure of your strokes, the subjects you draw—all of these contain meaning that we explore together.

## Who Can Benefit?

Art therapy can help:
- Children struggling with emotional expression
- Adults dealing with anxiety, depression, or trauma
- Individuals processing grief or loss
- People seeking personal growth and self-discovery
- Anyone feeling stuck or overwhelmed

## Starting Your Journey

If you're curious about art therapy, remember that the goal isn't artistic skill—it's healing, growth, and self-discovery. All you need is an open mind and willingness to explore.

In future articles, I'll share simple art therapy exercises you can try at home and dive deeper into specific techniques and their benefits.

*— Divya Masiwal Batra, MA Clinical Psychology, Art Therapist & Psychotherapist*
    `,
    author: "Divya Masiwal Batra",
    category: "Art Therapy Insights",
    tags: ["art therapy", "beginners", "mental health", "creative healing"],
    readTime: "6 min read",
    publishedAt: "2024-03-15",
  },
  {
    id: "2",
    slug: "five-simple-art-exercises-for-anxiety",
    title: "5 Simple Art Exercises for Managing Anxiety",
    excerpt:
      "Practical, easy-to-do art activities that can help calm your nervous system and provide relief from anxious thoughts.",
    content: `
# 5 Simple Art Exercises for Managing Anxiety

Anxiety can feel overwhelming, making it difficult to think clearly or find calm. As an art therapist, I've seen how creative activities can provide immediate relief by engaging your mind and body in the present moment. Here are five simple exercises you can try at home.

## 1. Zentangle Patterns

Zentangle is the practice of drawing repetitive patterns. It's meditative, calming, and requires no artistic skill.

**How to do it:**
- Start with a small square (3-4 inches)
- Draw simple, repetitive patterns: circles, lines, dots, waves
- Focus only on the pattern you're creating
- Let your mind rest in the repetition

**Why it works:** The repetitive motion activates the parasympathetic nervous system, helping your body relax.

## 2. Color Breathing

This exercise combines art with breathwork, two powerful anxiety-reducing tools.

**How to do it:**
- Choose two colors: one for anxiety, one for calm
- As you inhale, imagine breathing in the calm color
- As you exhale, visualize releasing the anxiety color
- Draw or paint these colors as you breathe
- Watch the calm color gradually take over your page

**Why it works:** Combining visualization with creative expression and deep breathing provides multi-layered anxiety relief.

## 3. Scribble Release

When anxiety feels like pent-up energy, this exercise helps release it physically.

**How to do it:**
- Take a large piece of paper
- Using your non-dominant hand, scribble vigorously
- Don't think—just move
- Let out the energy without judgment
- When done, you can transform the scribbles into something else if you wish

**Why it works:** Physical movement releases tension, and using your non-dominant hand bypasses your critical brain.

## 4. Mandala Coloring

Coloring mandalas is one of the most accessible and effective anxiety-relief activities.

**How to do it:**
- Choose a mandala design (simple or complex)
- Select colors that feel right to you
- Color from the center outward, or outside in
- Focus on staying within the lines or not—your choice
- Notice how you feel as you work

**Why it works:** The circular, symmetrical nature of mandalas is naturally calming, and the focused activity quiets anxious thoughts.

## 5. Gratitude Collage

Shifting focus to gratitude can interrupt anxious thought patterns.

**How to do it:**
- Gather magazines, printed images, or draw simple shapes
- Create a collage of things you're grateful for
- Include people, places, feelings, or objects
- Arrange them in a way that feels good to you
- Keep it visible as a reminder

**Why it works:** Gratitude practices rewire the brain toward positive thinking and reduce anxiety over time.

## Making It a Practice

Try incorporating one of these exercises into your daily routine, especially during moments of high stress. Remember, there's no "right" way to do these—what matters is the process and how it makes you feel.

If anxiety is significantly impacting your daily life, consider reaching out for professional support. Art therapy can be a powerful complement to other mental health treatments.

*— Divya Masiwal Batra, MA Clinical Psychology, Art Therapist & Psychotherapist*
    `,
    author: "Divya Masiwal Batra",
    category: "Mental Wellness",
    tags: ["anxiety", "art exercises", "self-help", "mindfulness"],
    readTime: "7 min read",
    publishedAt: "2024-03-20",
  },
  {
    id: "3",
    slug: "understanding-your-inner-critic",
    title: "Understanding and Transforming Your Inner Critic",
    excerpt:
      "Learn to recognize the voice of self-judgment and discover creative techniques to develop a more compassionate inner dialogue.",
    content: `
# Understanding and Transforming Your Inner Critic

We all have an inner voice that sometimes speaks harshly, criticizing our choices, appearance, abilities, or worth. This is what we call the "inner critic." While it may believe it's protecting us, it often causes more harm than good. Through art therapy, we can give this voice form, understand it, and ultimately transform our relationship with it.

## What is the Inner Critic?

The inner critic is that internal voice that tells you:
- "You're not good enough"
- "You'll never succeed"
- "Everyone else is better than you"
- "You don't deserve happiness"

This voice often develops in childhood as a way to protect us from rejection or failure. It's trying to keep us safe, but in adulthood, it frequently holds us back from growth, joy, and authenticity.

## The Impact of Self-Criticism

Constant self-criticism affects us deeply:
- **Mental health:** Increased anxiety, depression, and low self-esteem
- **Relationships:** Difficulty accepting love or believing we're worthy
- **Work and creativity:** Perfectionism and fear of failure
- **Physical health:** Stress-related symptoms and tension

## Giving Your Critic a Face

One powerful art therapy technique is to externalize your inner critic by giving it visual form.

**Exercise: Drawing Your Inner Critic**

1. Close your eyes and listen to your inner critic's voice
2. If this voice were a character, what would it look like?
3. Draw or paint this character
4. Notice: Is it big or small? What colors did you choose? What expression does it have?
5. Give it a name

This process helps create distance between you and the critical voice. It's not YOU—it's a part of you that developed to protect you.

## Understanding Its Origin

Once you've visualized your critic, ask yourself:
- When did this voice first appear?
- Who in your life spoke to you this way?
- What was happening when you first heard these messages?

Often, we discover our inner critic sounds like a parent, teacher, or other authority figure from our past.

## The Compassionate Response

Now, create a second artwork: your inner nurturer or compassionate self.

**Exercise: Drawing Your Inner Nurturer**

1. Imagine a wise, loving version of yourself
2. What would they look like?
3. Draw or create this compassionate presence
4. What would they say to you?
5. How do they respond to your inner critic?

## Creating Dialogue

Place both images side by side. Imagine a conversation between them. Write it down:

**Critic:** "You always mess things up."
**Nurturer:** "You're learning and growing. Mistakes are part of being human."

This practice helps you develop a more balanced, compassionate inner dialogue.

## Daily Practice

Transforming your inner critic takes time. Try these daily practices:

1. **Notice:** When does your critic speak up? What triggers it?
2. **Name it:** "That's my critic talking, not the truth."
3. **Respond with compassion:** What would you say to a friend in this situation?
4. **Create:** Use art to process and release critical thoughts

## When to Seek Support

If your inner critic is severe or persistent, or if it's linked to deeper trauma, consider working with an art therapist or mental health professional. We can help you explore these patterns more deeply in a safe, supportive environment.

Remember: You deserve to speak to yourself with the same kindness you'd offer a loved one.

*— Divya Masiwal Batra, MA Clinical Psychology, Art Therapist & Psychotherapist*
    `,
    author: "Divya Masiwal Batra",
    category: "Self-Discovery",
    tags: ["inner critic", "self-compassion", "mental health", "personal growth"],
    readTime: "8 min read",
    publishedAt: "2024-03-25",
  },
  {
    id: "4",
    slug: "art-therapy-for-processing-grief",
    title: "Using Art Therapy to Process Grief and Loss",
    excerpt:
      "Grief is a complex journey that words often fail to capture. Discover how creative expression can help you navigate loss and find healing.",
    content: `
# Using Art Therapy to Process Grief and Loss

Grief is one of the most profound human experiences. Whether you're mourning the loss of a loved one, the end of a relationship, a career change, or even the loss of who you thought you'd be—grief deserves space, time, and gentle expression. Art therapy offers a unique way to honor and process these feelings.

## Why Art for Grief?

Grief often exists beyond words. There are feelings, sensations, and memories that language cannot adequately capture. Art provides:

- **A safe container for overwhelming emotions**
- **A way to express the inexpressible**
- **A physical record of your journey through grief**
- **Permission to feel without needing to explain**

## The Stages Aren't Linear

You may have heard of the "five stages of grief," but in reality, grief isn't linear. It's messy, cyclical, and deeply personal. Some days you might feel acceptance; others, you're back to anger or denial. Art allows you to honor wherever you are without judgment.

## Art Exercises for Grief

### 1. Grief Map

Create a visual map of your grief journey.

**How to do it:**
- Use a large piece of paper
- Mark where you started (the loss)
- Draw the path your grief has taken
- Include colors, symbols, words, or images that represent different emotions
- Notice the terrain: Where are the mountains? The valleys? The rivers?

This exercise helps you see that grief is a journey, not a destination.

### 2. Memory Box Collage

Honor what was lost while keeping precious memories alive.

**How to do it:**
- Decorate a small box or create a collage
- Include photos, drawings, words, or objects that represent your memories
- Add colors and textures that remind you of the person or situation
- This becomes a sacred space to hold what matters

### 3. Letter Through Art

Sometimes we need to say things we never got to say.

**How to do it:**
- Create an artwork "letter" to the person or situation you've lost
- Use colors, symbols, and images instead of (or alongside) words
- Express gratitude, anger, longing, forgiveness—whatever needs to emerge
- You don't need to share this with anyone; it's for your healing

### 4. Before and After

Grief changes us. This exercise honors that transformation.

**How to do it:**
- Divide your paper in half
- On one side, create an image of "before the loss"
- On the other, create "after the loss"
- Notice what's different, what's the same
- Acknowledge that both versions of you are valid

### 5. Release Ritual

Art can be part of letting go when you're ready.

**How to do it:**
- Create an artwork that represents what you need to release
- This might be anger, guilt, or even the hope that things could be different
- When ready, you can tear it, burn it (safely), or bury it
- This ritual marks a turning point in your grief journey

## Honoring Your Pace

There's no timeline for grief. You might work through these exercises over weeks, months, or years. You might return to the same exercise multiple times as your relationship with the loss evolves. This is all normal and healthy.

## When Grief Becomes Complicated

Sometimes grief feels impossible to bear alone. If you're experiencing:
- Prolonged inability to function in daily life
- Persistent thoughts of self-harm
- Complete emotional numbness
- Inability to accept the loss after a long time

Please reach out to a therapist or counselor. Grief therapy, including art therapy, can provide the support you need to navigate this difficult journey.

## Finding Meaning

Art therapy doesn't make grief disappear, but it can help you:
- Process complex emotions
- Honor your loss
- Find meaning in your experience
- Gradually integrate the loss into your life story

Grief is love with nowhere to go. Art gives that love a place to exist, to be witnessed, and to transform.

*— Divya Masiwal Batra, MA Clinical Psychology, Art Therapist & Psychotherapist*
    `,
    author: "Divya Masiwal Batra",
    category: "Art Therapy Insights",
    tags: ["grief", "loss", "healing", "art therapy", "emotional processing"],
    readTime: "9 min read",
    publishedAt: "2024-04-01",
  },
  {
    id: "5",
    slug: "creative-journaling-for-self-discovery",
    title: "Creative Journaling: A Gateway to Self-Discovery",
    excerpt:
      "Move beyond traditional journaling with creative techniques that help you access deeper insights about yourself and your life.",
    content: `
# Creative Journaling: A Gateway to Self-Discovery

Traditional journaling—writing down thoughts and experiences—is powerful. But creative journaling takes it further by incorporating visual elements, colors, textures, and imagery. This multi-sensory approach can unlock insights that words alone might miss.

## What is Creative Journaling?

Creative journaling combines writing with art-making. It might include:
- Drawing and doodling
- Collage and mixed media
- Color and paint
- Found objects and ephemera
- Quotes and poetry
- Lists and mind maps

The key difference from a traditional journal? There are no rules. Your pages become a playground for self-expression.

## Why It Works

Creative journaling engages both hemispheres of your brain:
- **Left brain:** Linear thinking, words, logic
- **Right brain:** Images, emotions, intuition, creativity

When we combine both, we access a fuller picture of our inner world.

## Getting Started

You don't need expensive supplies. Start with:
- A notebook or sketchbook
- Pens or pencils
- Old magazines for collage
- Glue stick
- Optional: colored pencils, markers, watercolors

Remember: Your journal is for you alone. There's no judgment, no "correct" way to do it.

## Creative Journaling Prompts

### 1. Visual Mood Check

Instead of writing "I feel anxious," draw it.

**Try this:**
- Use colors to represent your mood
- Create abstract shapes or patterns
- Fill the page with how you feel, not what you think you should feel

### 2. Parts of Self Collage

We contain multitudes. This exercise honors different aspects of who you are.

**Try this:**
- Divide your page into sections
- Each section represents a different part of you: the professional, the child, the caregiver, the rebel, etc.
- Use images, colors, or words to represent each part
- Notice which parts get the most space—why?

### 3. Dream Journaling

Dreams often contain symbolic wisdom.

**Try this:**
- Upon waking, sketch images from your dreams
- Don't worry about creating a full narrative
- Focus on the feelings, colors, and symbols
- Over time, notice patterns

### 4. Gratitude Garden

Make gratitude visual and growing.

**Try this:**
- Draw a tree, garden, or field
- Each day, add a flower, leaf, or element representing something you're grateful for
- Watch your gratitude garden grow over time
- Return to this page when you need a reminder of life's goodness

### 5. Inner Wisdom Page

Accessing your intuition through creative prompts.

**Try this:**
- Write a question you're struggling with at the top of your page
- Close your eyes and take three deep breaths
- Open your eyes and immediately start creating—drawing, painting, collaging—without thinking
- When done, sit with your creation. What insights emerge?

### 6. Timeline of Transformation

Map your journey through a challenging time.

**Try this:**
- Draw a timeline of a difficult period
- Mark significant moments with colors, symbols, or images
- Notice: Where were the turning points? What helped you through?
- Celebrate how far you've come

## Making It a Practice

Creative journaling is most powerful when done regularly. Consider:

- **Daily pages:** 10 minutes each morning to set intentions or process feelings
- **Weekly review:** Reflect on the week through images and words
- **As needed:** Turn to your journal during difficult moments or big decisions

## Permission to Be Messy

Your creative journal won't be Instagram-worthy—and that's the point. It's a safe space for:
- Messy emotions
- Imperfect art
- Stream-of-consciousness thoughts
- Exploration without pressure

The "uglier" you let it be, the more honest and healing it becomes.

## What You Might Discover

Through regular creative journaling, many people find:
- **Patterns in thoughts and behaviors**
- **Clarity about decisions**
- **Release of pent-up emotions**
- **Greater self-compassion**
- **Connection to intuition**
- **A record of growth and healing**

## Going Deeper

If creative journaling resonates with you, consider:
- Joining a creative journaling workshop
- Working with an art therapist to explore deeper themes
- Creating themed journals (gratitude, dreams, healing, etc.)

Your journal becomes a trusted companion on your journey of self-discovery—a place where all parts of you are welcome.

*— Divya Masiwal Batra, MA Clinical Psychology, Art Therapist & Psychotherapist*
    `,
    author: "Divya Masiwal Batra",
    category: "Creative Expression",
    tags: ["journaling", "self-discovery", "creativity", "mindfulness", "personal growth"],
    readTime: "8 min read",
    publishedAt: "2024-04-08",
  },
  {
    id: "6",
    slug: "art-therapy-and-trauma-healing",
    title: "Art Therapy and Trauma: Healing Beyond Words",
    excerpt:
      "Understand how art therapy provides a safe pathway to process traumatic experiences when talking about them feels impossible.",
    content: `
# Art Therapy and Trauma: Healing Beyond Words

Trauma lives in the body and the nervous system, often beyond the reach of language. For many trauma survivors, talking about their experiences can feel impossible—or even retraumatizing. Art therapy offers an alternative pathway: healing through creative expression that honors the body's wisdom and the mind's need for safety.

## Understanding Trauma

Trauma occurs when an experience overwhelms our ability to cope. It can result from:
- Single events (accidents, violence, natural disasters)
- Ongoing situations (abuse, neglect, chronic stress)
- Developmental experiences (childhood trauma, attachment wounds)

Trauma doesn't just affect our thoughts—it affects our entire nervous system, changing how we feel, relate, and move through the world.

## Why Traditional Talk Therapy Isn't Always Enough

When we experience trauma, the language centers of our brain can go offline. Memories may be stored as sensations, images, or emotions rather than coherent narratives. This is why:

- **Talking about trauma can feel impossible:** The words simply aren't there
- **Recounting events can be retraumatizing:** It activates the nervous system without resolution
- **The body holds what the mind cannot process:** Tension, pain, and dysregulation persist

## How Art Therapy Helps

Art therapy provides a "side door" to trauma processing. Instead of talking directly about the traumatic event, we:

### 1. Work with Sensations

Trauma survivors often feel disconnected from their bodies. Art helps rebuild this connection safely.

**Example exercise: Body Mapping**
- Outline your body on large paper
- Use colors to show where you feel tension, pain, or numbness
- Notice without judgment
- Over time, track changes as healing occurs

### 2. Create Containing

Trauma can feel chaotic and overwhelming. Art provides structure and containment.

**Example exercise: Safe Container**
- Create or decorate a box
- This represents a place to "hold" difficult feelings
- When emotions feel too big, draw them and place them in your container
- You control when and how to revisit them

### 3. Express Without Words

Art allows expression of experiences that have no words.

**Example exercise: Abstract Expression**
- Choose colors that represent how you feel
- Paint, draw, or create without trying to make "something"
- Let the feelings move through you onto the page
- This is not about creating beauty—it's about release

### 4. Build Narrative Gradually

Over time, art can help piece together a trauma narrative at your own pace.

**Example exercise: Timeline Without Words**
- Create a visual timeline using colors, shapes, or abstract images
- No need to include specific details or words
- Notice the "before," "during," and "after"
- This helps organize fragmented memories

### 5. Reclaim Power and Agency

Trauma often involves a loss of control. Art-making is an act of agency.

**Example exercise: Transformation Series**
- Create an image representing how trauma has affected you
- Create another image of who you're becoming through healing
- Notice what you're reclaiming
- You control the narrative now

## Important Principles in Trauma Art Therapy

### Safety First

Trauma work must always prioritize safety:
- You control the pace
- You decide what to explore and when
- Grounding techniques are always available
- The therapeutic relationship is collaborative, not directive

### Titration

Trauma processing works best in small, manageable doses. We don't flood ourselves with the full force of traumatic memories. Instead, we:
- Touch the edge of the difficult feeling
- Return to safety and grounding
- Gradually build tolerance

### Pendulation

This means moving between:
- Trauma activation and safety
- Difficult feelings and resources
- The past and the present

Art therapy naturally supports this rhythm.

## What Trauma Healing Looks Like

Healing isn't linear. It might look like:
- Days when you feel strong, followed by days of struggle
- Unexpected triggers appearing even as overall functioning improves
- Gradual reconnection with your body and emotions
- Increased ability to be present
- More choice in how you respond to stress

## Self-Care Between Sessions

If you're doing trauma work:
- Have grounding tools readily available
- Maintain routines that provide stability
- Connect with safe, supportive people
- Be gentle with yourself on hard days
- Celebrate small victories

## Working with a Professional

While some art therapy exercises can be done independently, trauma work should ideally be done with a trained art therapist or trauma-informed therapist who:
- Understands nervous system regulation
- Can provide appropriate containment and support
- Recognizes signs of retraumatization
- Helps you integrate experiences safely

## Hope and Healing

Trauma changes us, but it doesn't have to define us. Through art therapy, many survivors discover:
- A sense of agency and empowerment
- Release of emotions held in the body
- Integration of fragmented experiences
- Connection to their resilience
- A path toward post-traumatic growth

Your healing journey is uniquely yours. Art therapy honors that journey by meeting you exactly where you are.

*— Divya Masiwal Batra, MA Clinical Psychology, Art Therapist & Psychotherapist*

---

*If you're struggling with trauma, please reach out to a qualified mental health professional. You don't have to heal alone.*
    `,
    author: "Divya Masiwal Batra",
    category: "Art Therapy Insights",
    tags: ["trauma", "healing", "PTSD", "art therapy", "nervous system"],
    readTime: "10 min read",
    publishedAt: "2024-04-15",
  },
]

// Helper functions
export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  })
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.category === category)
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit)
}
