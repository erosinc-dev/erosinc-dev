import os
import re
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether

md_path = "/Users/mayurrathi/.gemini/antigravity-ide/brain/26d18158-f217-4fc0-9cde-11a6f1eab92d/client_handover_document.md"
pdf_path = "/Users/mayurrathi/.gemini/antigravity-ide/brain/26d18158-f217-4fc0-9cde-11a6f1eab92d/client_handover_document.pdf"

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

# Custom styles
primary_color = colors.HexColor("#0f172a") # Slate 900
cyan_color = colors.HexColor("#00aeef")    # Eros Cyan
gold_color = colors.HexColor("#d97706")    # Eros Gold
text_color = colors.HexColor("#334155")    # Slate 700

title_style = ParagraphStyle(
    'DocTitle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=primary_color,
    spaceAfter=12
)

h2_style = ParagraphStyle(
    'SectionH2',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=14,
    leading=18,
    textColor=cyan_color,
    spaceBefore=16,
    spaceAfter=8
)

h3_style = ParagraphStyle(
    'SectionH3',
    parent=styles['Heading3'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=15,
    textColor=primary_color,
    spaceBefore=10,
    spaceAfter=6
)

body_style = ParagraphStyle(
    'BodyTextCustom',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9.5,
    leading=14,
    textColor=text_color,
    spaceAfter=6
)

bullet_style = ParagraphStyle(
    'BulletCustom',
    parent=body_style,
    leftIndent=15,
    spaceAfter=4
)

table_header_style = ParagraphStyle(
    'TableHeader',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9,
    leading=11,
    textColor=colors.white
)

table_body_style = ParagraphStyle(
    'TableBody',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    textColor=text_color
)

story = []

lines = text.split('\n')
i = 0
in_table = False
table_data = []

def format_inline(txt):
    # Convert markdown bold/italics/code to reportlab XML
    txt = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', txt)
    txt = re.sub(r'\*(.*?)\*', r'<i>\1</i>', txt)
    txt = re.sub(r'`(.*?)`', r'<font face="Courier" color="#00aeef">\1</font>', txt)
    txt = txt.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    # Restore converted XML tags
    txt = txt.replace('&lt;b&gt;', '<b>').replace('&lt;/b&gt;', '</b>')
    txt = txt.replace('&lt;i&gt;', '<i>').replace('&lt;/i&gt;', '</i>')
    txt = txt.replace('&lt;font face="Courier" color="#00aeef"&gt;', '<font face="Courier" color="#00aeef">').replace('&lt;/font&gt;', '</font>')
    return txt

while i < len(lines):
    line = lines[i].strip()
    
    # Handle Tables
    if line.startswith('|'):
        in_table = True
        cells = [c.strip() for c in line.split('|')[1:-1]]
        if not all(c.startswith('---') or c.startswith(':---') for c in cells if c):
            if not table_data: # Header row
                table_data.append([Paragraph(format_inline(c), table_header_style) for c in cells])
            else:
                table_data.append([Paragraph(format_inline(c), table_body_style) for c in cells])
        i += 1
        continue
    elif in_table:
        in_table = False
        if table_data:
            t = Table(table_data, colWidths=[80, 80, 250, 60])
            t.setStyle(TableStyle([
                ('BACKGROUND', (0,0), (-1,0), primary_color),
                ('ALIGN', (0,0), (-1,-1), 'LEFT'),
                ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
                ('BOTTOMPADDING', (0,0), (-1,-1), 6),
                ('TOPPADDING', (0,0), (-1,-1), 6),
                ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
                ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.white, colors.HexColor("#f8fafc")])
            ]))
            story.append(t)
            story.append(Spacer(1, 10))
            table_data = []

    if not line:
        i += 1
        continue
        
    if line.startswith('# '):
        story.append(Paragraph(format_inline(line[2:]), title_style))
        story.append(HRFlowable(width="100%", thickness=2, color=cyan_color, spaceAfter=12))
    elif line.startswith('## '):
        story.append(Paragraph(format_inline(line[3:]), h2_style))
        story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#e2e8f0"), spaceAfter=8))
    elif line.startswith('### '):
        story.append(Paragraph(format_inline(line[4:]), h3_style))
    elif line.startswith('* ') or line.startswith('- '):
        story.append(Paragraph(f"• {format_inline(line[2:])}", bullet_style))
    elif line.startswith('---'):
        story.append(Spacer(1, 6))
    else:
        story.append(Paragraph(format_inline(line), body_style))
        
    i += 1

doc.build(story)
print(f"Successfully generated PDF at: {pdf_path}")
