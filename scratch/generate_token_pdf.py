import os
import re
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable

md_path = "/Users/mayurrathi/.gemini/antigravity-ide/brain/26d18158-f217-4fc0-9cde-11a6f1eab92d/cms_token_guide.md"
pdf_path = "/Users/mayurrathi/.gemini/antigravity-ide/brain/26d18158-f217-4fc0-9cde-11a6f1eab92d/cms_token_guide.pdf"

with open(md_path, "r", encoding="utf-8") as f:
    text = f.read()

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=40,
    leftMargin=40,
    topMargin=40,
    bottomMargin=40
)

styles = getSampleStyleSheet()

primary_color = colors.HexColor("#0f172a") # Slate 900
cyan_color = colors.HexColor("#00aeef")    # Eros Cyan
gold_color = colors.HexColor("#d97706")    # Eros Gold
text_color = colors.HexColor("#334155")    # Slate 700

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=24,
    textColor=primary_color,
    spaceAfter=6
)

subtitle_style = ParagraphStyle(
    'DocSubtitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=14,
    textColor=gold_color,
    spaceAfter=12
)

h2_style = ParagraphStyle(
    'SectionH2',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=13,
    leading=17,
    textColor=cyan_color,
    spaceBefore=14,
    spaceAfter=6
)

h3_style = ParagraphStyle(
    'SectionH3',
    parent=styles['Heading3'],
    fontName='Helvetica-Bold',
    fontSize=10.5,
    leading=14,
    textColor=primary_color,
    spaceBefore=8,
    spaceAfter=4
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=14,
    textColor=text_color,
    spaceAfter=5
)

bullet_style = ParagraphStyle(
    'BulletCustom',
    parent=body_style,
    leftIndent=15,
    spaceAfter=3
)

story = []

def format_inline(txt):
    txt = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', txt)
    txt = re.sub(r'\*(.*?)\*', r'<i>\1</i>', txt)
    txt = re.sub(r'`(.*?)`', r'<font face="Courier" color="#00aeef">\1</font>', txt)
    txt = txt.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    txt = txt.replace('&lt;b&gt;', '<b>').replace('&lt;/b&gt;', '</b>')
    txt = txt.replace('&lt;i&gt;', '<i>').replace('&lt;/i&gt;', '</i>')
    txt = txt.replace('&lt;font face="Courier" color="#00aeef"&gt;', '<font face="Courier" color="#00aeef">').replace('&lt;/font&gt;', '</font>')
    return txt

lines = text.split('\n')
for line in lines:
    line = line.strip()
    if not line:
        continue
        
    if line.startswith('# '):
        story.append(Paragraph(format_inline(line[2:]), title_style))
    elif line.startswith('### '):
        if 'Sveltia CMS Authentication' in line:
            story.append(Paragraph(format_inline(line[4:]), subtitle_style))
            story.append(HRFlowable(width="100%", thickness=2, color=cyan_color, spaceAfter=10))
        else:
            story.append(Paragraph(format_inline(line[4:]), h3_style))
    elif line.startswith('## '):
        story.append(Paragraph(format_inline(line[3:]), h2_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#e2e8f0"), spaceAfter=6))
    elif line.startswith('* ') or line.startswith('- '):
        story.append(Paragraph(f"• {format_inline(line[2:])}", bullet_style))
    elif line[0].isdigit() and (line[1] == '.' or (len(line) > 2 and line[2] == '.')):
        story.append(Paragraph(format_inline(line), bullet_style))
    elif line.startswith('---'):
        story.append(Spacer(1, 4))
    else:
        story.append(Paragraph(format_inline(line), body_style))

doc.build(story)
print(f"Successfully generated PDF at: {pdf_path}")
