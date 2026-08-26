#!/usr/bin/env python3
"""
Programmatic SEO page generator: pregnancy week-by-week.
Generates /pregnancy-week-by-week/week-1/ .. week-40/ with real gestational
math, curated fetal size/development data, per-week symptoms and tips.
Each page is a standalone value page with its own canonical (NOT canonical
to the tool page), following the house longtail pattern in generate-seo-pages.py.

Run: python3 scripts/gen-pregnancy-week-pages.py   (idempotent)
"""
import os

PROJECT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_BASE = os.path.join(PROJECT, "pregnancy-week-by-week")
BASE = "https://toolaspect.com/pregnancy-week-by-week"
ANALYTICS = "087c548b-708c-42bf-9d9a-5704df7880f2"

# week -> (length, weight, comparison, month, lead sentence(s), dev paragraph, symptoms, tip)
DATA = {
1: ("—","—","not yet conceived",1,
    "Week 1 starts on the first day of your last period, which means you're not pregnant yet in any biological sense. Doctors count from here because the LMP is the one date most people can pinpoint. Conception is still about two weeks away.",
    "Your body is shedding last cycle's uterine lining and starting fresh. Follicles in your ovaries are beginning to mature, one of which will release next cycle's egg. The pregnancy count that started this week will run 280 days to your due date.",
    ["A normal period","Mild cramping","No pregnancy symptoms yet"],
    "Start a prenatal vitamin with 400–600 mcg folic acid now if you're trying; the neural tube closes in the first month, often before a positive test."),
2: ("—","—","a ripening follicle",1,
    "Week 2 is still pre-conception: your body is finishing preparations while a dominant follicle ripens in one ovary. The uterine lining thickens to receive a possible embryo. Ovulation, and with it conception, happens around the end of this week on a typical 28-day cycle.",
    "Rising luteinizing hormone will trigger ovulation, releasing the egg into the fallopian tube where sperm may be waiting. An egg survives only 12 to 24 hours after release, which is why the fertile window spans the days just before ovulation too.",
    ["Rising basal body temperature","Clear, stretchy cervical mucus","Mild one-sided twinge at ovulation"],
    "Track ovulation signs or use a predictor kit this week; knowing your ovulation date makes later dating more accurate than a remembered period alone."),
3: ("0.01 in","—","a poppy seed",1,
    "Week 3 is conception week. Sperm meets egg in the fallopian tube, and the fused cell begins dividing as it drifts toward the uterus. Your baby is a microscopic ball of cells this week, already carrying a complete genetic blueprint.",
    "The fertilized egg becomes a zygote, then a morula, then a blastocyst as it travels. Around the end of the week it reaches the uterus and begins burrowing into the plush lining, a process called implantation that finishes early in week 4.",
    ["Light implantation spotting possible","Mild cramping","No obvious symptoms for most"],
    "Avoid alcohol, smoking, and high-mercury fish from now on; the neural tube and earliest organs form in the next two weeks, when the embryo is most sensitive to harm."),
4: ("0.04 in","—","a poppy seed",1,
    "Week 4 is when the pregnancy becomes detectable. The blastocyst finishes implanting in the uterine lining, and the cells that will become the placenta start pumping out hCG, the hormone a home test measures. A sensitive test can turn positive now.",
    "The embryo settles into two layers: the epiblast, which becomes your baby, and the hypoblast, which feeds it early on. The amniotic sac and yolk sac are forming. Size is still measured in millimeters, about a tenth of a centimeter.",
    ["Missed period","Light spotting (implantation)","Tender breasts","Fatigue"],
    "Take a home pregnancy test if your period is late; first morning urine holds the most hCG. Call to schedule your first prenatal visit, usually set for around week 8."),
5: ("0.09 in","—","a sesame seed",1,
    "Week 5 begins the embryonic period proper, the stretch when every major organ starts taking shape. The heart is forming and will begin beating in the next few days, and the neural tube, future brain and spine, is folding closed.",
    "Three layers now divide the work: the ectoderm builds brain, spine, and skin; the mesoderm builds heart, muscles, and bones; the endoderm builds lungs, gut, and bladder. The heart tube starts pulsing around day 21 to 22 after conception.",
    ["Fatigue hitting hard","Morning sickness starting","Frequent urination","Food aversions, heightened smell"],
    "Book your first prenatal appointment now and be ready with your LMP date and medication list. If you haven't started a prenatal vitamin with folic acid, today beats tomorrow."),
6: ("0.13 in","—","a lentil",1,
    "Week 6 often brings the first ultrasound glimpse: a flickering heartbeat around 110 beats per minute. Meanwhile nausea tends to arrive in force, because hCG is climbing fast and the embryo's heart now has visible chambers forming.",
    "The heart is dividing into chambers and beating at roughly twice your resting rate. Arm and leg buds poke out, the neural tube along the back is closing, and dark spots mark the earliest eyes. The tail-like structure is at its most prominent this week.",
    ["Nausea, worse on an empty stomach","Exhaustion","Tender, swelling breasts","Frequent urination"],
    "Eat small amounts every couple of hours; an empty stomach makes nausea worse. Call your provider about any bleeding that fills a pad, but mild cramping is common."),
7: ("0.25 in","—","a blueberry",1,
    "Week 7 is a growth spurt for the brain: roughly 100 new brain cells form every minute. The embryo's head is huge relative to the body, and paddle-shaped hands are appearing at the ends of the arm buds.",
    "The brain divides into its three sections, and cells for the pituitary gland form. Kidneys move into position, and the umbilical cord, your baby's lifeline for the next seven-plus months, is fully functional. Mouth and tongue become visible.",
    ["Food aversions and cravings","Excess saliva","Acne breakouts","Bloating and constipation"],
    "Constipation responds to water, fiber, and movement. Ginger chews and vitamin B6 are first-line nausea helpers; ask your provider before adding supplements."),
8: ("0.63 in","—","a kidney bean",1,
    "Week 8 brings visible fingers and toes forming in the paddles, and the embryonic tail is disappearing. Breathing tubes extend from the throat toward the developing lungs. Everything is tiny but increasingly recognizable as a future person.",
    "The upper lip and nose take shape, eyelid folds begin, and nerve cells branch out to connect with each other. The heart now beats at 150 to 170 bpm. Cartilage is replacing the early soft tissue in the arms and legs.",
    ["Bra size changing","Uterus growing to grapefruit size","Cramping and round ligament twinges","Vivid dreams"],
    "Get fitted for a supportive bra; breast changes continue all pregnancy. Start Kegel exercises, which pay off in labor and recovery."),
9: ("0.9 in","—","a green olive",1,
    "Week 9 is graduation season: the basic body plan is complete, and from here it's growth and refinement. All four heart chambers have formed, the tail is gone, and sex organs begin differentiating, though ultrasound can't tell yet.",
    "The embryo looks distinctly human in miniature. Tooth buds form, and fine details like separated fingers emerge. The liver is producing red blood cells, and the placenta is preparing to take over hormone production.",
    ["Heartburn and indigestion","Emotional swings, weepiness","Constipation continuing","Waistband feeling snug"],
    "Small, frequent meals beat three large ones for heartburn. Note your emotional dips are hormonal chemistry, not character; they're expected this trimester."),
10: ("1.2 in","0.14 oz","a prune",1,
    "Week 10 ends the embryo chapter: your baby officially graduates to fetus. Vital organs are all in place and now must mature. Fingernails and downy hair follicles begin forming, and the stomach starts producing digestive juice.",
    "The forehead bulges as the brain grows, wrists and elbows can bend, and toes are fully separated. Kicks are starting inside, though far too small to feel. The yolk sac shrinks as the placenta takes over nutrition.",
    ["Visible veins on chest and belly","Nausea may begin easing","Round ligament pains","Gum sensitivity"],
    "Switch to a soft toothbrush if your gums bleed; pregnancy gingivitis is common and worth mentioning at the dentist."),
11: ("1.6 in","0.25 oz","a fig",1,
    "Week 11 marks a shift: nausea often loosens its grip and appetite returns with opinions. The baby's head is still about half the total length, but the body is straightening from its C-curl, and tiny fists can open and close.",
    "Tooth buds under the gums harden, the diaphragm forms, and the baby may hiccup, though you can't feel it. Skin is translucent, with blood vessels visible through it. Boys begin producing testosterone this week.",
    ["Appetite returning","Leg cramps at night","Darker areolas","Occasional headaches"],
    "Hydrate and stretch your calves before bed to blunt leg cramps. Ask about a first-trimester screening (NT scan plus bloodwork), typically done weeks 11 to 13."),
12: ("2.1 in","0.49 oz","a lime",1,
    "Week 12 closes the riskiest chapter: with the first trimester nearly done, miscarriage odds drop sharply. Reflexes have arrived, fingers can curl, toes can flex, and the kidneys are making urine that becomes amniotic fluid.",
    "The intestines, which grew so fast they temporarily herniated into the cord, move fully into the abdomen. The pituitary gland starts making hormones, and bone marrow is gearing up to build white cells. Fingerprints begin etching.",
    ["Nausea fading","Energy lifting","Spotting possible after sex or exams","Heightened sense of smell"],
    "The nuchal translucency window closes soon, so schedule the NT scan this week if you're doing first-trimester screening. Low-impact exercise is encouraged from here."),
13: ("2.9 in","0.81 oz","a peach",1,
    "Week 13 is the last week of the first trimester, and the odds now favor a healthy outcome by a wide margin. Your baby has vocal cords forming, and unique fingerprints are finishing on fingertips smaller than rice grains.",
    "The spleen and liver share blood-cell duty, and urine output ramps up. Insulin production begins, bones of the arms and legs start hardening from cartilage, and the head slows its growth rate so the body can catch up.",
    ["Visible baby bump starting","Breathlessness on stairs","Breast tenderness easing","Increased energy"],
    "Start budgeting for maternity clothes; the transition happens fast in the next month. A photo timeline from here makes a keepsake later."),
14: ("3.4 in","1.5 oz","a lemon",2,
    "Week 14 opens the second trimester, the stretch many call the honeymoon phase. Energy climbs, nausea recedes, and the baby begins coordinated facial work: squinting, frowning, even grimacing.",
    "Fine lanugo hair starts covering the body for warmth. The liver and kidneys are functioning, and the baby can pass urine. The neck is defined and the chin lifts off the chest. Sucking muscles strengthen in the cheeks.",
    ["Renewed energy","Nasal congestion (pregnancy rhinitis)","Appetite climbing","Fuller hair"],
    "Saline spray or a humidifier helps pregnancy rhinitis. Ease back into exercise gently; aim for 150 minutes of moderate activity weekly."),
15: ("4.1 in","2.5 oz","an apple",2,
    "Week 15 brings the first evidence of a senses upgrade: the baby senses light through still-fused eyelids. Bones are dense enough to show on an X-ray, and the baby practices breathing amniotic fluid.",
    "Legs now outmeasure arms, and the skeleton keeps hardening from cartilage. Skin is still paper-thin and translucent, with blood vessels visible. Some providers offer the quad screen or NIPT blood draw around now.",
    ["Heartburn","Nosebleeds possible","Swollen feet by evening","Quick, shifting moods"],
    "Sleep on your side from now on; it improves blood flow to the placenta. A pillow under the bump and between the knees helps."),
16: ("4.6 in","3.5 oz","an avocado",2,
    "Week 16 is hearing week: tiny bones in the ears are in place and the baby can start registering your voice. Facial muscles now work well enough for squints and grimaces, and the heart pumps around 25 quarts of fluid a day.",
    "The scalp pattern is forming, though hair isn't visible yet. Toes reach an inch long, and the uterus you grew is now the size of a papaya. Movement is frequent but still featherlight.",
    ["First flutters possible (second+ pregnancies)","Glowing, oily skin","Backache starting","Constipation"],
    "Talk and read aloud; low-frequency voices carry best into the womb. Begin gentle back stretches to stay ahead of the backache."),
17: ("5.1 in","4.9 oz","a turnip",2,
    "Week 17 is padding season: brown fat starts forming under the skin, readying the baby for temperature control after birth. The skeleton keeps converting from rubbery cartilage to bone, and the heartbeat may be audible with a Doppler.",
    "The brain is rewiring for finer control, and the umbilical cord thickens and strengthens. Sweat glands are forming. The baby now weighs close to a third of a pound and practices constant small movements.",
    ["Round ligament pain (sharp, brief)","Increased appetite","Dry or itchy skin on the belly","Weird, vivid dreams"],
    "Moisturize the growing belly to ease itching. Move slowly when standing up; round ligament pain is startling but harmless."),
18: ("5.6 in","6.7 oz","a bell pepper",2,
    "Week 18 is yawning and hiccuping week. Myelin starts coating the nerves, and if the baby is a girl, her uterus and fallopian tubes are in place; a boy's genitalia are visible enough to spot on ultrasound.",
    "Ears shift to their final position and hearing sharpens. The brain's areas for smell, taste, sight, hearing, and touch are specializing. Blood vessels are clearly visible through the translucent skin.",
    ["Pelvic aches","Swelling in hands and feet","Trouble finding sleep positions","Blood pressure dipping on standing"],
    "Rise slowly from lying to sitting to standing; your blood pressure runs lower now. Book the anatomy scan for weeks 18 to 22 if you haven't."),
19: ("6.0 in","8.5 oz","an heirloom tomato",2,
    "Week 19 brings vernix: a creamy, waxy coating starts covering the baby's skin to protect it from weeks of amniotic fluid immersion. The brain is carving out dedicated zones for the five senses.",
    "The kidneys keep making urine, the scalp is sprouting hair, and the limbs have reached proportions they'll keep. First-time parents usually feel movement between now and week 22, second-timers earlier.",
    ["Leg cramps","Hip pain at night","Dizziness","Skin darkening (linea nigra may start)"],
    "Side-sleeping with a pregnancy pillow is the fix for hip pain. Track movement patterns once kicks become regular."),
20: ("~10 in","10.6 oz","a banana",2,
    "Week 20 is the halfway mark, measured head to heel now instead of crown to rump, which is why length seems to jump. The baby swallows small amounts of amniotic fluid, and meconium, the first stool, is accumulating in the bowels.",
    "The anatomy scan happens around now: a detailed ultrasound checking heart chambers, brain structures, kidneys, limbs, and, if you want, sex. The baby's taste buds are working, and the sweet tooth starts here; amniotic fluid carries flavors.",
    ["Belly button flattening or popping","Shortness of breath","Swollen ankles","Stronger kicks"],
    "Eat varied flavors now; babies taste what you eat through amniotic fluid. Put your feet up above heart level for swollen ankles."),
21: ("10.5 in","12.7 oz","a carrot",2,
    "Week 21 brings rapid eye movements and the start of real sleep architecture. The baby's lips and eyebrows are more distinct, and drifting kicks are getting strong enough that a hand on the belly can feel them.",
    "The digestive system is practicing for the first feeding, and the baby responds to sound with movement. Weight gain from here is mostly fat and muscle. The placenta keeps growing to match demand.",
    ["Stretch marks appearing","Varicose veins possible","Increased appetite","Braxton Hicks, rare and painless"],
    "Varicose veins improve with compression socks and walks. Irregular, painless tightenings are normal; call for painful, regular contractions."),
22: ("10.9 in","15.2 oz","a spaghetti squash",2,
    "Week 22 sharpens the senses: grip strength improves, hearing is acute enough that loud sounds may startle the baby, and the inner ear's balance system finishes forming. Lips, eyelids, and eyebrows are increasingly distinct.",
    "Tooth enamel forms on the buds under the gums. The pancreas, crucial for hormone production, is developing steadily. The baby is around a pound now, though still had a full pound of growing to do per month ahead.",
    ["Backache increasing","Urine leaks when sneezing or laughing","Stringy discharge normal","Increased vaginal discharge"],
    "Practice pelvic-floor exercises daily now to reduce third-trimester leaks. A support belt can offload the back."),
23: ("11.4 in","1.1 lb","a large mango",2,
    "Week 23 thickens the skin and starts filling out that wrinkled look with fat. Loud noises from outside can now produce a measurable reaction, and the baby's hearing will keep sharpening until birth.",
    "The lungs practice breathing motions, though the air sacs aren't ready for real air. Skin is still translucent-red but losing some see-through quality. Blood vessels in the lungs develop to prepare for that first breath.",
    ["Swelling in feet and ankles","Linea nigra darkening","Braxton Hicks more noticeable","Snoring"],
    "Sleep propped up to quiet the snoring. Watch for sudden facial or hand swelling, which deserves a same-day call."),
24: ("11.8 in","1.32 lb","an ear of corn",2,
    "Week 24 is the viability milestone: babies born now can survive with intensive neonatal care, and survival odds climb steeply every week after. The lungs begin producing surfactant, the soap-like film that lets air sacs stay open.",
    "The face is fully formed with eyelashes and brows. Taste buds are fully working, and the baby has a stable wake-sleep rhythm you may be mapping from kicks. Skin is still loose but filling.",
    ["Itchy belly skin","Glucose tolerance test window opens (24–28 wks)","Leaky colostrum possible","Backache and hip soreness"],
    "Schedule the glucose screening test for the next month. Start a kick-counting habit: learn the baby's normal pattern."),
25: ("13.6 in","1.46 lb","a rutabaga",2,
    "Week 25 brings recognizable hair, with color and texture now set. Fat continues packing on, and the baby's proportions are starting to look newborn-like under the still-wrinkled skin.",
    "Capillaries form in the lungs to prep for oxygen exchange, and the nostrils, plugged until now, open. The nerves around the mouth and lips grow sensitive enough for rooting reflex practice.",
    ["Heartburn returning","Hemorrhoids possible","Restless sleep","Hip and pelvic aches"],
    "Heartburn: smaller dinners and no lying down right after. For hemorrhoids, water, fiber, and a donut cushion."),
26: ("14.0 in","1.68 lb","a zucchini",2,
    "Week 26 opens eyes: the lids that fused months ago unseal, and the baby begins blinking. Brain-wave activity for sight and sound kicks in, making this a big sensory milestone week.",
    "The lungs are working on surfactant production and the air sacs begin to branch. The baby responds more consistently to your voice and touch through the belly. Responding to sound includes calming to familiar songs.",
    ["Rib pressure and shortness of breath","Braxton Hicks more frequent","Trouble sleeping","Bloating"],
    "Do the glucose test this month if you haven't. A humidifier and saline spray help pregnancy nose."),
27: ("14.4 in","1.93 lb","a cauliflower",2,
    "Week 27 closes the second trimester. The baby now sleeps and wakes on more regular cycles, hiccups are common, and a two-week lung growth spurt is beginning that will run through week 30.",
    "Brain tissue is developing fast, with the characteristic grooves and folds forming. The baby can suck fingers and swallow. Recognizable amounts of fat smooth the skin week by week.",
    ["Leg cramps worse at night","Mild swelling normal","Pelvic pressure","Shortness of breath"],
    "Do calf stretches before bed. Plan your third-trimester appointment cadence: every two weeks from week 28."),
28: ("14.8 in","2.22 lb","an eggplant",3,
    "Week 28 opens the third trimester. Eyes can open and close, rapid-eye-movement sleep means dreaming, and brain grooves deepen. The baby could now smile, or at least practice the muscle pattern for one.",
    "Fat layers are filling out fast, and lanugo starts to loosen. Lung surfactant production continues. The baby is over two pounds, and from here gains roughly half a pound a week on average.",
    ["Braxton Hicks stronger","Colostrum leaks possible","Carpal tunnel tingling in hands","Fatigue returning"],
    "Begin daily kick counts: pick a time daily and note how long 10 movements take. Same pattern tomorrow is the goal."),
29: ("15.2 in","2.54 lb","a butternut squash",3,
    "Week 29 is head-down season: the baby's head grows to catch up with the body, and bones are fully developed but still soft and flexible. Muscles and lungs keep maturing on schedule.",
    "The brain can now regulate body temperature, and the adrenal glands are scaling up. The baby kicks with real force, and you may see a foot or elbow slide across the belly. Calcium demand peaks for hardening bone.",
    ["Frequent urination back with a vengeance","Heartburn","Constipation","Backache"],
    "Keep calcium coming, about 1,000 mg a day, from food first. Watch kick patterns, not kick counts alone."),
30: ("15.7 in","2.91 lb","a cabbage",3,
    "Week 30 hits the ten-milliliter-of-amniotic-fluid-per-pound mark, and the baby is approaching three pounds. Red blood cell production shifts to the bone marrow, a sign of mature systems coming online.",
    "The eyes can track light, and the baby can turn toward a bright source pressed near the belly. Lanugo continues disappearing, and toenails have reached the tips of the toes. Average daily gain now approaches half an ounce.",
    ["Fatigue","Braxton Hicks","Trouble sleeping","Stretch marks continuing"],
    "Start prenatal classes and a hospital-bag list. Insomnia responds best to a wind-down routine you repeat nightly."),
31: ("16.2 in","3.31 lb","a coconut",3,
    "Week 31 connects the senses: all five are now operational, and the brain is wiring connections between them at high speed. The baby can perceive information from all senses simultaneously.",
    "Fat fills the arms and legs. The uterus is crowded enough that flips become slow rolls, and sharp jabs under the ribs become common. The placenta continues supplying antibodies that protect the baby now and after birth.",
    ["Shortness of breath","Braxton Hicks","Backache","Frequent urination"],
    "Count kicks at the same time daily. If movements seem reduced, drink something cold, rest, and recheck before calling."),
32: ("16.7 in","3.75 lb","a jicama",3,
    "Week 32 is practice week: breathing rehearsals involve inhaling amniotic fluid, sometimes producing hiccups you can feel. Toenails and fingernails are complete, and most lanugo is gone.",
    "The skin is finally opaque, no longer see-through, and smooths as fat fills it. The baby sleeps most of the day in cycles of about 30 to 90 minutes. Weight is closing on four pounds.",
    ["Trouble sleeping","Braxton Hicks","Heartburn","Leaky breasts (colostrum)"],
    "Consider banking or freezing colostrum only if advised. Ask about the TDap vaccine, recommended between 27 and 36 weeks."),
33: ("17.2 in","4.23 lb","a pineapple",3,
    "Week 33 keeps the skull deliberately soft: the plates stay flexible and the sutures between them loose so the head can mold through the birth canal. Every other bone is hardening.",
    "Amniotic fluid volume is at its peak and will slowly decline from here. The baby's immune system is developing its first antibody responses. The brain's skull plates flexibility is the body's smartest engineering for birth.",
    ["Clumsiness (relaxed joints, shifted balance)","Waddling gait","Braxton Hicks","Interrupted sleep"],
    "Slow down on stairs and put away the heels. Pack the hospital bag now if you haven't; early arrivals happen."),
34: ("17.7 in","4.73 lb","a cantaloupe",3,
    "Week 34 rounds the corners: fat layers smooth out the skin, the central nervous system is maturing, and the baby would have a strong chance in the outside world if born now.",
    "The fingernails reach the fingertips. The lungs are nearly mature, and surfactant production is in its final weeks of ramp-up. The baby is settling into the head-down position for most pregnancies by now.",
    ["Blurred vision from fluid shifts","Fatigue","Swollen ankles","Increased vaginal discharge"],
    "Sudden vision changes, severe headache, or upper-right belly pain warrant an immediate call; they're preeclampsia flags to rule out."),
35: ("18.2 in","5.25 lb","a honeydew melon",3,
    "Week 35 is weight-gain season: nearly all gain from here is fat, which insulates and stores energy for the first days after birth. The brain keeps growing faster than any other organ.",
    "The kidneys are fully developed, and the liver processes some waste. The baby is running out of room, so movement shifts from jabs to rolls and stretches. Most babies are head-down by this week.",
    ["Frequent urination","Heartburn","Trouble sleeping","Pelvic pressure"],
    "Install the car seat and have it checked; most hospitals require it before discharge. Rest between errands."),
36: ("18.7 in","5.78 lb","a head of romaine",3,
    "Week 36 means weekly appointments and, for many first babies, lightening: the baby drops into the pelvis, easing the ribs and pressing the bladder. Cheeks plump with sucking muscles ready for feeding.",
    "The baby's grasp is firm, and meconium continues accumulating. Lung development is essentially finished for most babies. The uterus is at its highest point, just under the ribcage.",
    ["Easier breathing after dropping","Pelvic heaviness","Lightning crotch (brief nerve zings)","Nesting energy surge"],
    "Review the signs of labor versus false labor: real contractions get longer, stronger, and closer together. Confirm your route and plan for the drive."),
37: ("19.1 in","6.30 lb","a bunch of kale",3,
    "Week 37 is early term: babies born now do well, though the brain and lungs still have finishing weeks. The baby practices all the skills needed outside: sucking, swallowing, grasping, blinking.",
    "The baby's hand coordination is now strong enough to grasp. The circulatory system and lungs make their final preparations for the first breath. Antibodies transfer across the placenta at an increasing rate.",
    ["Braxton Hicks blending with early labor signs","Pelvic pressure","Bloody show possible near labor","Frequent urination"],
    "Watch for the mucus plug and bloody show. If your water breaks, note the time and call; fluid, not mucus, is the call-to-action."),
38: ("19.6 in","6.80 lb","a leek",3,
    "Week 38 averages six and three-quarter pounds with organs mature but the brain still adding connections it will keep building for years. The liver is storing iron for the first months after birth.",
    "Toenails and fingernails may need trimming within days of birth. Vernix, the waxy coating, is mostly gone. The baby continues practicing breathing motions and swallowing.",
    ["Strong Braxton Hicks","Backache","Sleep trouble","Nesting intensity"],
    "Rest as much as you can and stay reachable. Go in for regular contractions five minutes apart for an hour, or earlier if advised."),
39: ("20.0 in","7.25 lb","a mini watermelon",3,
    "Week 39 is full term, the ideal window. The chest becomes more prominent as the baby drops and prepares. Fat continues accumulating for warmth after birth.",
    "The brain and lungs finish their final maturation. The placenta continues passing antibodies that immunize the baby for the first months. The baby has a firm grasp and turning, wiggling practice for the journey out.",
    ["Mucus plug passing","Diarrhea as labor nears","Contractions becoming regular","Backache and cramping"],
    "Track contractions with a timer app. Trust the pattern: longer, stronger, closer together means go."),
40: ("20.2 in","7.63 lb","a small pumpkin",3,
    "Week 40 is the due week, and only about 4 to 5 in 100 babies arrive on the exact date. The placenta is still delivering antibodies, and the baby continues growing, roughly half a pound this week.",
    "The baby is fully developed: organs working, reflexes sharp, grasp strong. Most of the lanugo and vernix are gone, swallowed and processed. The skull plates stay flexible for delivery.",
    ["Contractions","Bloody show","Water breaking","Nesting or exhaustion"],
    "Once active labor starts, eat lightly and stay hydrated. After 41 weeks providers usually discuss induction; your OB or midwife will walk you through it."),
}

MONTH_MAP = {}
for m, weeks in {1: range(1,5), 2: range(5,9), 3: range(9,14), 4: range(14,18),
                 5: range(18,23), 6: range(23,28), 7: range(28,32),
                 8: range(32,36), 9: range(36,41)}.items():
    for w in weeks:
        MONTH_MAP[w] = m

def tri(w):
    return ("First trimester", 1) if w <= 13 else (("Second trimester", 2) if w <= 27 else ("Third trimester", 3))

def ordinal_weeks_to_go(w):
    left = 40 - w
    if left == 0:
        return "this is the due week"
    return f"{left} week{'s' if left != 1 else ''} to go"

CSS = """
:root{--bg:#0f1117;--surface:#1a1d27;--border:#2a2d3a;--text:#e4e4e7;--muted:#9ca3af;--primary:#ec4899;--primary-hover:#f472b6;--radius:10px;--radius-lg:14px}
.page-container{max-width:860px;margin:0 auto;padding:0 1rem}
.page-header{padding:2rem 0 .5rem;text-align:center}
.page-header h1{font-size:1.75rem;font-weight:700;margin-bottom:.3rem}
.page-header p{color:var(--muted);font-size:.95rem}
.aio-answer{background:rgba(236,72,153,.08);border-left:3px solid var(--primary);border-radius:0 10px 10px 0;padding:1rem 1.25rem;margin-top:1.25rem;font-size:.95rem;line-height:1.7;color:var(--text)}
.section-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-lg);padding:1.5rem;margin-top:1.5rem}
.section-card h2{font-size:1.1rem;font-weight:600;margin-bottom:1rem}
.content-section{margin-top:2rem}
.content-section h2{font-size:1.3rem;font-weight:700;margin-bottom:.75rem}
.content-section p{color:var(--muted);line-height:1.7;margin-bottom:.75rem;font-size:.95rem}
.content-section ul{color:var(--muted);line-height:1.8;margin-bottom:.75rem;padding-left:1.5rem}
.table-wrap{overflow-x:auto;margin:.5rem 0}
.data-table{width:100%;border-collapse:collapse;font-size:.88rem}
.data-table th,.data-table td{padding:.5rem .75rem;border:1px solid var(--border);text-align:left}
.data-table th{background:var(--bg)}
.faq-item{padding:16px 0;border-bottom:1px solid var(--border)}
.faq-item:last-child{border-bottom:none}
.faq-item h3{font-size:.95rem;font-weight:600;margin-bottom:6px;color:var(--text)}
.faq-item p{font-size:.88rem;color:var(--muted);line-height:1.7}
.week-nav{display:flex;gap:1rem;margin-top:2rem}
.week-nav a{flex:1;text-align:center;padding:.9rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);text-decoration:none;font-size:.9rem;font-weight:600;transition:border-color .2s}
.week-nav a:hover{border-color:var(--primary)}
.week-nav a span{display:block;font-weight:400;font-size:.78rem;color:var(--muted);margin-top:2px}
.related-tools{margin-top:2.5rem}
.related-tools h2{font-size:1.2rem;margin-bottom:.75rem}
.related-links{display:flex;flex-wrap:wrap;gap:.5rem}
.related-links a{padding:.4rem .8rem;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);color:var(--text);text-decoration:none;font-size:.85rem}
.related-links a:hover{border-color:var(--primary)}
.ad-slot{background:var(--surface);border:1px dashed var(--border);border-radius:10px;padding:40px 20px;text-align:center;color:var(--muted);font-size:.85rem;margin:20px 0}
.med-note{background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.3);border-radius:var(--radius);padding:.85rem 1rem;font-size:.85rem;color:var(--muted);line-height:1.6;margin-top:1.5rem;text-align:center}
"""

def month_weeks(m):
    return {1:"1–4",2:"5–8",3:"9–13",4:"14–17",5:"18–22",6:"23–27",7:"28–31",8:"32–35",9:"36–40"}[m]

MILESTONES = [(4, "a positive home pregnancy test as hCG rises"),
              (6, "the first heartbeat, usually visible on ultrasound"),
              (10, "graduation from embryo to fetus"),
              (12, "the close of the nuchal translucency screening window (weeks 11–13)"),
              (14, "the second trimester"),
              (20, "the anatomy scan window (weeks 18–22)"),
              (24, "viability and the opening of the glucose-test window (weeks 24–28)"),
              (28, "the third trimester and the start of daily kick counts"),
              (32, "the Tdap vaccine window (27–36 weeks) winding down"),
              (36, "weekly appointments and lightening"),
              (37, "early term"),
              (39, "full term")]

def next_milestone(w):
    for mw, txt in MILESTONES:
        if mw > w:
            return f"Week {mw} brings {txt}."
    return "You are in the due week; from 41 weeks your provider will usually talk induction."

def cadence(w):
    if w < 28:
        return "Prenatal appointments run about every four weeks in this stretch."
    if w < 36:
        return "Appointments step up to every two weeks from week 28."
    return "Appointments are weekly from week 36 until delivery."

def context_para(w, tname, tnum):
    spans = {1: (1, 13), 2: (14, 27), 3: (28, 40)}[tnum]
    pos = w - spans[0] + 1
    ord_name = {1: "first", 2: "second", 3: "third"}[tnum]
    tri_note = {
        1: "If your cycle runs longer or shorter than the 28 days the due-date math assumes, your ovulation date and due date shift with it, which is why a first-trimester ultrasound remains the gold standard for dating.",
        2: "Across this trimester the baby more than triples in weight, so expect your bump, your appetite, and eventually your waddle to keep pace with the calendar.",
        3: "From here the baby gains roughly half a pound a week on average, which is why the third trimester feels measurably heavier by the day.",
    }[tnum]
    return (f"Gestationally, week {w} means you are {w-1} weeks and 0 to 6 days pregnant, "
            f"day {7*w-6} to day {7*w} counted from the first day of your last period. "
            f"This is week {pos} of the {ord_name} trimester "
            f"(weeks {spans[0]}–{spans[1]}). {cadence(w)} {next_milestone(w)} "
            f"{tri_note} "
            f"Every number on this page is an average across pregnancies; your own scan dates "
            f"and your baby's measurements are what actually describe your week {w}.")

def page(w):
    length, weight, comp, month, lead, dev, symptoms, tip = DATA[w]
    tname, tnum = tri(w)
    d_lo, d_hi = 7 * w - 6, 7 * w
    ga_lo, ga_hi = f"{w-1}w0d", f"{w-1}w6d"
    togo = 40 - w
    size_str = f"about {length} long and {weight}" if weight != "—" else f"about {length} long"
    title = f"Pregnancy Week {w}: Baby Size, Symptoms & Tips | ToolAspect"
    if len(title) > 60:
        title = f"Pregnancy Week {w}: Size, Symptoms & Tips | ToolAspect"
    month_phrase = f"week {w} falls in month {month} of pregnancy (weeks {month_weeks(month)})"
    meta = (f"Week {w} of pregnancy: baby is {length} and {weight}, the size of {comp}. "
            f"{tname}, {ordinal_weeks_to_go(w)}. Symptoms, milestones and what to do.")
    if len(meta) > 155:
        meta = (f"Week {w}: baby averages {length}, {weight} — {comp}. {tname}, "
                f"{ordinal_weeks_to_go(w)}. Symptoms and tips.")
    aio = (f"<strong>Week {w} of 40:</strong> days {d_lo}–{d_hi} of pregnancy (gestational age {ga_lo} to {ga_hi}), "
           f"{tname.lower()}, {ordinal_weeks_to_go(w)}. "
           + (f"The baby averages <strong>{length} long and {weight}</strong>, about the size of <strong>{comp}</strong>. "
              if weight != "—" else
              f"The baby is still microscopic-to-tiny this week, on the scale of {comp}. ")
           + dev.split(". ")[0] + ".")

    faqs = [(f"How many months is {w} weeks pregnant?",
             f"Weeks of pregnancy don't map cleanly to calendar months, but the common division puts {month_phrase}. "
             f"Week {w} is part of the {tname.lower()}, which " +
             ("runs from week 1 to week 13." if tnum == 1 else
              "runs from week 14 to week 27." if tnum == 2 else
              "runs from week 28 to birth.") +
             f" Gestationally, week {w} means you are {w-1} weeks and 0 to 6 days pregnant."),
            (f"What size is the baby at week {w}?",
             ("At week %d the baby averages %s long and weighs about %s, roughly the size of %s. Sizes come from fetal "
              "growth charts (%s), and normal variation week to week is wide; your ultrasound measurements always "
              "outrank a chart." % (w, length, weight, comp,
                                    "crown-rump length before week 20" if w < 20 else "crown-to-heel length from week 20"))
             if weight != "—" else
             ("At week %d there isn't much to measure yet; the baby is on the scale of %s. Measurable length in inches "
              "begins with the embryo stage in the next few weeks." % (w, comp)))]

    faq_ld = ",".join('{"@type":"Question","name":"%s","acceptedAnswer":{"@type":"Answer","text":"%s"}}'
                      % (q.replace('"', '\\"'), a.replace('"', '\\"')) for q, a in faqs)

    sym_list = "".join(f"<li>{s}</li>" for s in symptoms)
    prev_block = (f'<a href="/pregnancy-week-by-week/week-{w-1}/">← Week {w-1}<span>{tri(w-1)[0]}</span></a>'
                  if w > 1 else
                  '<a href="/pregnancy-week-by-week/" style="visibility:hidden"></a>')
    next_block = (f'<a href="/pregnancy-week-by-week/week-{w+1}/">Week {w+1} →<span>{tri(w+1)[0]}</span></a>'
                  if w < 40 else
                  '<a href="/pregnancy-due-date-calculator/">Due Date Calculator<span>what comes next</span></a>')

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<script src="/shared/domain-redirect.js"></script>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{meta}">
<link rel="canonical" href="{BASE}/week-{w}/">
<meta property="og:title" content="Pregnancy Week {w}">
<meta property="og:image" content="https://toolaspect.com/shared/og-image.png">
<meta property="og:description" content="Week {w}: baby size, development, symptoms and what to do this week.">
<meta property="og:type" content="article">
<meta property="og:url" content="{BASE}/week-{w}/">
<script type="application/ld+json">
{{"@context":"https://schema.org","@type":"Article","headline":"Pregnancy Week {w}","description":"{meta}","author":{{"@type":"Organization","name":"ToolAspect"}},"publisher":{{"@type":"Organization","name":"ToolAspect","url":"https://toolaspect.com"}}}}
</script>
<script type="application/ld+json">
{{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{faq_ld}]}}
</script>
<script type="application/ld+json">
{{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{{"@type":"ListItem","position":1,"name":"Home","item":"https://toolaspect.com/"}},{{"@type":"ListItem","position":2,"name":"Pregnancy Week by Week","item":"{BASE}/"}},{{"@type":"ListItem","position":3,"name":"Week {w}","item":"{BASE}/week-{w}/"}}]}}
</script>
<style>{CSS}</style>
<script async defer data-website-id="{ANALYTICS}" src="https://analytics.coreaspectai.com/script.js"></script>
</head>
<body>
<script src="/shared/nav.js"></script>
<div class="page-container">
<div class="page-header">
<h1>🤰 Pregnancy Week {w}</h1>
<p>{tname} · {ordinal_weeks_to_go(w).capitalize()}</p>
</div>

<div class="aio-answer">{aio}</div>

<div class="section-card">
<h2>Week {w} at a Glance</h2>
<div class="table-wrap">
<table class="data-table">
<thead><tr><th>Fact</th><th>Week {w}</th></tr></thead>
<tbody>
<tr><td>Days of pregnancy</td><td>{d_lo}–{d_hi} since LMP</td></tr>
<tr><td>Gestational age span</td><td>{ga_lo} to {ga_hi}</td></tr>
<tr><td>Trimester</td><td>{tname} ({"weeks 1–13" if tnum==1 else "weeks 14–27" if tnum==2 else "weeks 28–40"})</td></tr>
<tr><td>Pregnancy month</td><td>Month {month} (weeks {month_weeks(month)})</td></tr>
<tr><td>Average length</td><td>{'not yet measurable' if length == '—' else length} ({'crown to heel' if w >= 20 else 'crown to rump' if w >= 4 else 'too small to measure'})</td></tr>
<tr><td>Average weight</td><td>{'not yet measurable' if weight == '—' else weight}</td></tr>
<tr><td>Size comparison</td><td>{comp}</td></tr>
<tr><td>Weeks remaining</td><td>{togo if togo > 0 else 0} (40-week due date)</td></tr>
</tbody>
</table>
</div>
</div>

<div class="ad-slot">Advertisement</div>

<div class="content-section">
<h2>Your Baby at Week {w}</h2>
<p>{lead}</p>
<p>{dev}</p>
<p>{context_para(w, tname, tnum)}</p>
<h2>Your Body at Week {w}</h2>
<ul>{sym_list}</ul>
<h2>What to Do This Week</h2>
<p>{tip}</p>
</div>

<div class="section-card">
<h2>Frequently Asked Questions</h2>
{''.join(f'<div class="faq-item"><h3>{q}</h3><p>{a}</p></div>' for q, a in faqs)}
</div>

<div class="med-note">⚕️ Educational information only, not medical advice. Sizes and milestones are population averages; every pregnancy runs on its own schedule. Questions about your symptoms or care belong with your OB or midwife.</div>

<div class="week-nav">{prev_block}{next_block}</div>

<div class="related-tools">
<h2>Related Calculators</h2>
<div class="related-links">
<a href="/pregnancy-week-by-week/">🤰 Week-by-Week Tracker</a>
<a href="/pregnancy-due-date-calculator/">📅 Due Date Calculator</a>
<a href="/pregnancy-weight-gain-calculator/">⚖️ Pregnancy Weight Gain</a>
<a href="/ovulation-calculator/">🌸 Ovulation Calculator</a>
</div>
</div>

<div class="ad-slot">Advertisement</div>
</div>
</body>
</html>
"""

def main():
    made = 0
    for w in range(1, 41):
        d = os.path.join(OUT_BASE, f"week-{w}")
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, "index.html"), "w") as f:
            f.write(page(w))
        made += 1
    print(f"Generated {made} week pages under {OUT_BASE}/week-*/")

if __name__ == "__main__":
    main()
