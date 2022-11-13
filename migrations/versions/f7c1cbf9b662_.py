"""empty message

Revision ID: f7c1cbf9b662
Revises: dd0abe078146
Create Date: 2022-11-11 20:28:17.037790

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f7c1cbf9b662'
down_revision = 'dd0abe078146'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('uid', sa.String(length=130), nullable=True))
    op.create_unique_constraint(None, 'user', ['uid'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user', type_='unique')
    op.drop_column('user', 'uid')
    # ### end Alembic commands ###